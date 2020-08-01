import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';

import api from '../../services/api';

import RoutePath from '../../pages/RoutePath';

Object.defineProperty(window.navigator, 'geolocation', {
  value: {
    getCurrentPosition: jest.fn(),
  },
});

const mockApi = new MockAdapter(api);

jest.mock('react-router-dom', () => ({
  useLocation: () => ({
    state: {
      start_point: [2323, 2323],
      end_point: [3232, 3232],
    },
  }),
  NavLink: ({ children }: { children: ReactNode }) => children,
}));

describe('RoutePath', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    mockApi.reset();
  });

  it('should render RoutePath page', async () => {
    const { getByText } = render(<RoutePath />);

    expect(getByText('Percurso de entrega')).toBeTruthy();
  });
});
