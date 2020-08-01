import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';

import Header from '../../components/Header';

jest.mock('react-router-dom', () => ({
  NavLink: ({ children }: { children: ReactNode }) => children,
}));

describe('Header', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render Header component', async () => {
    const { container } = render(<Header />);

    const component = container.querySelector('.sc-AxjAm');

    expect(component).toBeTruthy();
  });
});
