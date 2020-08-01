import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Map from '../../components/Map';

interface MapContainer extends Element {
  click(): void;
}

const mockGetPositionCallback = jest.fn();

Object.defineProperty(window.navigator, 'geolocation', {
  value: {
    getCurrentPosition: jest.fn(position =>
      position({
        coords: {
          latitude: 2020,
          longitude: 1010,
        },
      }),
    ),
  },
});

describe('Map', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render Map component', async () => {
    const { container } = render(<Map getPosition={() => {}} />);

    const mapContainer = container.querySelector(
      '.leaflet-container',
    ) as MapContainer;

    expect(mapContainer).toBeTruthy();
  });

  it('should be able to click on the map', async () => {
    const { container } = render(<Map getPosition={mockGetPositionCallback} />);

    const mapContainer = container.querySelector(
      '.leaflet-container',
    ) as MapContainer;

    fireEvent.click(mapContainer);

    expect(mockGetPositionCallback).toHaveBeenCalledWith(
      expect.arrayContaining([expect.anything()]),
    );
  });
});
