import React, { useState, useCallback, useEffect, memo } from 'react';
import { Map, TileLayer, Marker, MapProps } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

type GeoLocation = [number, number];

interface MapLeafletProps extends Partial<MapProps> {
  getPosition(callback: GeoLocation): void;
  hasNewPosition?: GeoLocation;
}

const MapLeaflet: React.FC<MapLeafletProps> = props => {
  const { getPosition, hasNewPosition, ...rest } = props;

  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  useEffect(() => {
    getPosition(selectedPosition);
  }, [getPosition, selectedPosition]);

  useEffect(() => {
    if (hasNewPosition && hasNewPosition[0] !== 0) {
      setInitialPosition(hasNewPosition);

      setSelectedPosition(hasNewPosition);
      return;
    }

    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    });
  }, [hasNewPosition]);

  const handleMapClick = useCallback((event: LeafletMouseEvent) => {
    setSelectedPosition([event.latlng.lat, event.latlng.lng]);
  }, []);

  return (
    <Map
      style={{ height: '25vh', width: '32vw', margin: '0 8px 0' }}
      center={initialPosition}
      zoom={14}
      onClick={handleMapClick}
      {...rest}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={selectedPosition} />
    </Map>
  );
};

export default memo(MapLeaflet);
