import React, { ReactNode } from 'react';
import { render, waitFor, fireEvent, act } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import * as toastify from 'react-toastify';

import api from '../../services/api';

import CreateDelivery from '../../pages/CreateDelivery';

const mockPush = jest.fn();

const toastSpy = jest.spyOn(toastify, 'toast');

Object.defineProperty(window.navigator, 'geolocation', {
  value: {
    getCurrentPosition: jest.fn(),
  },
});

const mockApi = new MockAdapter(api);

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockPush,
  }),
  NavLink: ({ children }: { children: ReactNode }) => children,
}));

describe('CreateDelivery', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    mockApi.reset();

    jest.spyOn(Date, 'now').mockImplementation(() => {
      return new Date(2020, 7, 1).getTime();
    });
  });

  it('should render CreateDelivery page', async () => {
    const { getByPlaceholderText, getByText } = render(<CreateDelivery />);

    await waitFor(() => {
      expect(getByPlaceholderText('Destino')).toBeTruthy();
    });

    expect(getByText('Origem')).toBeTruthy();
    expect(getByText('Destino')).toBeTruthy();
    expect(getByText('Cadastrar')).toBeTruthy();
  });

  it('should be able to create a delivery', async () => {
    mockApi.onPost('deliveries').reply(200);

    const { getByPlaceholderText, getByTestId, getByText } = render(
      <CreateDelivery />,
    );

    await waitFor(() => {
      expect(getByPlaceholderText('Destino')).toBeTruthy();
    });

    const clientInputElement = getByPlaceholderText('Cliente');
    const dateInputElement = getByTestId('delivery_date');
    const originInputElement = getByPlaceholderText('Origem');
    const destinationInputElement = getByPlaceholderText('Destino');

    const submitButton = getByText('Cadastrar');

    await act(async () => {
      fireEvent.change(clientInputElement, {
        target: { value: 'client-name' },
      });

      fireEvent.change(dateInputElement, {
        target: { value: '2020-10-12' },
      });

      fireEvent.change(originInputElement, {
        target: { value: 'Lat: 3232,  Lng: 3232' },
      });

      fireEvent.change(destinationInputElement, {
        target: { value: 'Lat: 2323,  Lng: 2323' },
      });
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/deliveries');

      expect(toastSpy).toHaveBeenCalledWith('Cadastro realizada com sucesso', {
        type: 'success',
        progressStyle: { backgroundColor: '#88dd88' },
      });
    });
  });

  it('should not be able to create a delivery in past dates', async () => {
    const { getByPlaceholderText, getByTestId, getByText } = render(
      <CreateDelivery />,
    );

    await waitFor(() => {
      expect(getByPlaceholderText('Destino')).toBeTruthy();
    });

    const clientInputElement = getByPlaceholderText('Cliente');
    const dateInputElement = getByTestId('delivery_date');
    const originInputElement = getByPlaceholderText('Origem');
    const destinationInputElement = getByPlaceholderText('Destino');

    const submitButton = getByText('Cadastrar');

    await act(async () => {
      fireEvent.change(clientInputElement, {
        target: { value: 'client-name' },
      });

      fireEvent.change(dateInputElement, {
        target: { value: '1900-10-12' },
      });

      fireEvent.change(originInputElement, {
        target: { value: 'Lat: 3232,  Lng: 3232' },
      });

      fireEvent.change(destinationInputElement, {
        target: { value: 'Lat: 2323,  Lng: 2323' },
      });
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(toastSpy).toHaveBeenCalledWith(
        'A entrega precisa ser em uma data futura!',
        {
          type: 'warning',
          pauseOnHover: true,
          progressStyle: { backgroundColor: '#a9ff1f' },
        },
      );
    });
  });

  it('should not be able to create a delivery if api call fails', async () => {
    const { getByPlaceholderText, getByTestId, getByText } = render(
      <CreateDelivery />,
    );

    await waitFor(() => {
      expect(getByPlaceholderText('Destino')).toBeTruthy();
    });

    const clientInputElement = getByPlaceholderText('Cliente');
    const dateInputElement = getByTestId('delivery_date');
    const originInputElement = getByPlaceholderText('Origem');
    const destinationInputElement = getByPlaceholderText('Destino');

    const submitButton = getByText('Cadastrar');

    await act(async () => {
      fireEvent.change(clientInputElement, {
        target: { value: 'client-name' },
      });

      fireEvent.change(dateInputElement, {
        target: { value: 'wrong-credential' },
      });

      fireEvent.change(originInputElement, {
        target: { value: 'Lat: 3232,  Lng: 3232' },
      });

      fireEvent.change(destinationInputElement, {
        target: { value: 'Lat: 2323,  Lng: 2323' },
      });
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(toastSpy).toHaveBeenCalledWith(
        'Preencha todos os campos corretamente!',
        {
          type: 'warning',
          pauseOnHover: true,
          progressStyle: { backgroundColor: '#a9ff1f' },
        },
      );
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(toastSpy).toHaveBeenCalledWith(
        'Preencha todos os campos corretamente!',
        {
          type: 'warning',
          pauseOnHover: true,
          progressStyle: { backgroundColor: '#a9ff1f' },
        },
      );
    });
  });

  it('should not be able to create a delivery in past dates', async () => {
    mockApi.onPost('/deliveries').reply(500);

    const { getByPlaceholderText, getByTestId, getByText } = render(
      <CreateDelivery />,
    );

    await waitFor(() => {
      expect(getByPlaceholderText('Destino')).toBeTruthy();
    });

    const clientInputElement = getByPlaceholderText('Cliente');
    const dateInputElement = getByTestId('delivery_date');
    const originInputElement = getByPlaceholderText('Origem');
    const destinationInputElement = getByPlaceholderText('Destino');

    const submitButton = getByText('Cadastrar');

    await act(async () => {
      fireEvent.change(clientInputElement, {
        target: { value: 'client-name' },
      });

      fireEvent.change(dateInputElement, {
        target: { value: '2020-10-12' },
      });

      fireEvent.change(originInputElement, {
        target: { value: 'Lat: 3232,  Lng: 3232' },
      });

      fireEvent.change(destinationInputElement, {
        target: { value: 'Lat: 2323,  Lng: 2323' },
      });
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(toastSpy).toHaveBeenCalledWith(
        'Erro inesperado, tente novamente mais tarde!',
        {
          type: 'error',
          pauseOnHover: true,
          progressStyle: { backgroundColor: '#ff0000' },
        },
      );
    });
  });

  it('should not be able to create a delivery in past dates', async () => {
    mockApi.onPost('/deliveries').reply(500);

    const { getByPlaceholderText, getByTestId, getByText } = render(
      <CreateDelivery />,
    );

    await waitFor(() => {
      expect(getByPlaceholderText('Destino')).toBeTruthy();
    });

    const clientInputElement = getByPlaceholderText('Cliente');
    const dateInputElement = getByTestId('delivery_date');
    const originInputElement = getByPlaceholderText('Origem');
    const destinationInputElement = getByPlaceholderText('Destino');

    const submitButton = getByText('Cadastrar');

    await act(async () => {
      fireEvent.change(clientInputElement, {
        target: { value: 'client-name' },
      });

      fireEvent.change(dateInputElement, {
        target: { value: '2020-10-12' },
      });

      fireEvent.change(originInputElement, {
        target: { value: 'Lat: 3232,  Lng: 3232' },
      });

      fireEvent.change(destinationInputElement, {
        target: { value: 'Lat: 2323,  Lng: 2323' },
      });
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(toastSpy).toHaveBeenCalledWith(
        'Erro inesperado, tente novamente mais tarde!',
        {
          type: 'error',
          pauseOnHover: true,
          progressStyle: { backgroundColor: '#ff0000' },
        },
      );
    });
  });
});
