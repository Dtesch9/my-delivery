import React, { useCallback, useRef, useState, useMemo } from 'react';
import { Form } from '@unform/web';
import { FiUser, FiCalendar, FiMapPin } from 'react-icons/fi';

import Input from '../../components/Input';
import Map from '../../components/Map';

import { Container, Wrapper, Card, MapArea, MapContainer } from './styles';

const CreateDelivery: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [origin, setOrigin] = useState<[number, number]>([0, 0]);
  const [destination, setDestination] = useState<[number, number]>([0, 0]);

  const originParsed = useMemo(() => {
    return `Lat:${origin[0].toPrecision(15)},  Lng:${origin[1].toPrecision(
      15,
    )}`;
  }, [origin]);

  const destinationParsed = useMemo(() => {
    return `Lat:${destination[0].toPrecision(
      15,
    )},  Lng:${destination[1].toPrecision(15)}`;
  }, [destination]);

  const handleSubmit = useCallback(() => {}, []);

  const handleOrigin = useCallback((position: [number, number]) => {
    setOrigin(position);
  }, []);

  const handleDestination = useCallback((position: [number, number]) => {
    setDestination(position);
  }, []);

  return (
    <Container>
      <Wrapper>
        <Card>
          <h1>Cadastre uma entrega</h1>

          <Form onSubmit={handleSubmit}>
            <Input Icon={FiUser} name="client_name" placeholder="Cliente" />

            <Input
              Icon={FiCalendar}
              name="delivery_deadline"
              type="date"
              placeholder="Data de entrega"
            />

            <Input
              ref={inputRef}
              Icon={FiMapPin}
              name="origin"
              value={origin[0] ? originParsed : undefined}
              placeholder="Origem"
            />

            <Input
              ref={inputRef}
              Icon={FiMapPin}
              name="destination"
              value={destination[0] ? destinationParsed : undefined}
              placeholder="Destination"
            />
          </Form>

          <MapArea>
            <MapContainer>
              <h2>Origem</h2>
              <Map getPosition={handleOrigin} />
            </MapContainer>

            <MapContainer>
              <h2>Destino</h2>
              <Map getPosition={handleDestination} />
            </MapContainer>
          </MapArea>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default CreateDelivery;
