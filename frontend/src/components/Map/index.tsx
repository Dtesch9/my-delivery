import React, { useState, useCallback, useEffect, memo } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

type GeoLocation = [number, number];

interface MapLeafletProps {
  getPosition(callback: GeoLocation): void;
}

const MapLeaflet: React.FC<MapLeafletProps> = ({ getPosition }) => {
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  getPosition(selectedPosition);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    });
  }, []);

  const handleMapClick = useCallback((event: LeafletMouseEvent) => {
    setSelectedPosition([event.latlng.lat, event.latlng.lng]);
  }, []);

  return (
    <Map
      style={{ height: '25vh', width: '25vw', margin: '0 12px 0' }}
      center={initialPosition}
      zoom={14}
      onClick={handleMapClick}
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
