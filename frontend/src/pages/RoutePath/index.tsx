import React, { useState } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { useLocation } from 'react-router-dom';

import Header from '../../components/Header';
import Routing from '../../components/Routing';

import { Container, Wrapper, Card } from './styles';

interface RouteParams {
  start_point: [number, number];
  end_point: [number, number];
}

const RoutePath: React.FC = () => {
  const [refMap, setRefMap] = useState<any>({});
  const RouteParams = useLocation<RouteParams>();

  const { start_point, end_point } = RouteParams.state;

  return (
    <Container>
      <Wrapper>
        <Header />

        <Card>
          <h1>Percurso de entrega</h1>

          <Map
            ref={setRefMap}
            style={{ height: '100%', width: '95%', borderRadius: '6px' }}
            center={start_point}
            zoom={14}
          >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {refMap && (
              <Routing
                map={refMap}
                start_point={start_point}
                end_point={end_point}
              />
            )}

            <Marker position={start_point} />
            <Marker position={end_point} />
          </Map>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default RoutePath;
