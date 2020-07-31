import React, { useCallback, useRef, useState, useMemo } from 'react';
import { Form } from '@unform/web';
import { FiUser, FiCalendar, FiX } from 'react-icons/fi';

import Input from '../../components/Input';
import Map from '../../components/Map';

import { Container, Wrapper, Card, MapArea } from './styles';

const CreateDelivery: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [origin, setOrigin] = useState<[number, number]>([0, 0]);
  const [destination, setDestination] = useState<[number, number]>([0, 0]);

  const originParsed = useMemo(() => {
    return `Lat:${origin[0]}, Lng:${origin[1]}`;
  }, [origin]);

  const destinationParsed = useMemo(() => {
    return `Lat:${destination[0]}, Lng:${destination[1]}`;
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
              Icon={FiX}
              name="origin"
              value={origin[0] ? originParsed : undefined}
              placeholder="Origem"
            />

            <Input
              ref={inputRef}
              Icon={FiX}
              name="destination"
              value={destination[0] ? destinationParsed : undefined}
              placeholder="Destination"
            />
          </Form>

          <MapArea>
            <Map getPosition={handleOrigin} />
            <Map getPosition={handleDestination} />
          </MapArea>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default CreateDelivery;
