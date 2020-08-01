import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { FiSettings } from 'react-icons/fi';

import Input from '../../components/Input';

jest.mock('@unform/core', () => ({
  useField: () => ({
    fieldName: 'name',
    defaultValue: '',
    error: '',
    registerField: jest.fn(),
  }),
}));

describe('Input Component', () => {
  it('should be able to render input component', () => {
    const { getByPlaceholderText } = render(
      <Input name="name" placeholder="place-holder" />,
    );

    expect(getByPlaceholderText('place-holder')).toBeTruthy();
  });

  it('should be able to hightlight on input focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input Icon={FiSettings} name="name" placeholder="place-holder" />,
    );

    const inputElement = getByPlaceholderText('place-holder');
    const inputContainer = getByTestId('input-container');
    const inputIcon = getByTestId('input-icon');

    expect(inputIcon).toHaveStyle('color: #8991BE;');

    fireEvent.focus(inputElement);

    await waitFor(() => {
      expect(inputContainer).toHaveStyle(
        'box-shadow: 2px 1px 4px 1px #8991be;',
      );
      expect(inputIcon).toHaveStyle('color: #0AFF0A;');
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(inputContainer).not.toHaveStyle(
        'box-shadow: 2px 1px 4px 1px #8991be;',
      );
      expect(inputIcon).not.toHaveStyle('color: #0AFF0A;');
    });
  });

  it('should be able keep text highlight on blur when filled', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input Icon={FiSettings} name="name" placeholder="place-holder" />,
    );

    const inputElement = getByPlaceholderText('place-holder');
    const inputContainer = getByTestId('input-container');
    const inputIcon = getByTestId('input-icon');

    fireEvent.change(inputElement, { target: { value: 30 } });

    fireEvent.focus(inputElement);
    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(inputContainer).not.toHaveStyle('border-color: #8991be;');
      expect(inputIcon).toHaveStyle('color: #0AFF0A;');
    });
  });
});
