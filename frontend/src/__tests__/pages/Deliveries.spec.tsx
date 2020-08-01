import React, { ReactNode } from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import * as toastify from 'react-toastify';

import api from '../../services/api';

import Deliveries from '../../pages/Deliveries';

const mockPush = jest.fn();

const toastSpy = jest.spyOn(toastify, 'toast');

const mockApi = new MockAdapter(api);

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockPush,
  }),
  NavLink: ({ children }: { children: ReactNode }) => children,
}));

describe('Deliveries', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    mockApi.reset();
  });

  it('should render Deliveries page', async () => {
    const deliveries = [
      {
        id: 'delivery-id',
        client_name: 'client-name',
        delivery_date: '2020-10-12',
        start_point: [2121, 2121],
        end_point: [3131, 1313],
      },
    ];

    mockApi.onGet('/deliveries').reply(200, deliveries);

    const { getByText } = render(<Deliveries />);

    await waitFor(() => {
      expect(getByText('Lista de entregas')).toBeTruthy();
      expect(getByText('client-name')).toBeTruthy();
      expect(getByText('12/10/2020')).toBeTruthy();
    });
  });

  it('should display an toast error if api call fails', async () => {
    mockApi.onGet('/deliveries').reply(500);

    const { getByText } = render(<Deliveries />);

    expect(getByText('Lista de entregas')).toBeTruthy();

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

  it('should be able to navigate to RoutePath when click on a specifically delivery', async () => {
    const deliveries = [
      {
        id: 'delivery-id',
        client_name: 'client-name',
        delivery_date: '2020-10-12',
        start_point: [2121, 2121],
        end_point: [3131, 1313],
      },
    ];

    mockApi.onGet('/deliveries').reply(200, deliveries);

    const { getByText } = render(<Deliveries />);

    await waitFor(() => {
      expect(getByText('Lista de entregas')).toBeTruthy();
      expect(getByText('client-name')).toBeTruthy();
      expect(getByText('12/10/2020')).toBeTruthy();
    });

    fireEvent.click(getByText('12/10/2020'));

    expect(mockPush).toHaveBeenCalledWith({
      pathname: '/delivery_path',
      state: {
        start_point: deliveries[0].start_point,
        end_point: deliveries[0].end_point,
      },
    });
  });
});
