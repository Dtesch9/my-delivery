import React, { useCallback, useRef, useState, useMemo } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { toast } from 'react-toastify';
import { isAfter } from 'date-fns';
import * as Yup from 'yup';
import { FiUser, FiCalendar, FiMapPin, FiSave } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import Input from '../../components/Input';
import Map from '../../components/Map';
import Header from '../../components/Header';

import {
  Container,
  Wrapper,
  Card,
  MapArea,
  MapContainer,
  SubmitButton,
} from './styles';

interface FormData {
  client_name: string;
  delivery_date: string;
  origin: string;
  destination: string;
}

const CreateDelivery: React.FC = () => {
  const { push } = useHistory();
  const formRef = useRef<FormHandles>(null);
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

  const handleSubmit = useCallback(
    async (formData: FormData) => {
      formRef.current?.reset();

      try {
        const { client_name, delivery_date } = formData;

        const filteredDate = delivery_date.split('-');

        const yearMonthDay = filteredDate.map(date => Number(date));

        const date_deadline = new Date(
          yearMonthDay[0],
          yearMonthDay[1] - 1,
          yearMonthDay[2],
        );

        const data = {
          client_name,
          delivery_date: date_deadline,
          start_point: origin,
          end_point: destination,
        };

        const schema = Yup.object().shape({
          client_name: Yup.string().required(),
          delivery_date: Yup.date().required(),
          start_point: Yup.array().required(),
          end_point: Yup.array().required(),
        });

        await schema.validate(data, { abortEarly: false });

        const currentDay = new Date(Date.now());

        const futureDeliveryDate = isAfter(date_deadline, currentDay);

        if (!futureDeliveryDate) {
          toast('A entrega precisa ser em uma data futura!', {
            type: 'warning',
            pauseOnHover: true,
            progressStyle: { backgroundColor: '#a9ff1f' },
          });

          return;
        }

        await api.post('/deliveries', data);

        push('/deliveries');

        toast('Cadastro realizada com sucesso', {
          type: 'success',
          progressStyle: { backgroundColor: '#88dd88' },
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          toast('Preencha todos os campos corretamente!', {
            type: 'warning',
            pauseOnHover: true,
            progressStyle: { backgroundColor: '#a9ff1f' },
          });

          return;
        }

        toast('Erro inesperado, tente novamente mais tarde!', {
          type: 'error',
          pauseOnHover: true,
          progressStyle: { backgroundColor: '#ff0000' },
        });
      }
    },
    [origin, destination, push],
  );

  const handleOrigin = useCallback((position: [number, number]) => {
    setOrigin(position);
  }, []);

  const handleDestination = useCallback((position: [number, number]) => {
    setDestination(position);
  }, []);

  return (
    <Container>
      <Wrapper>
        <Header />

        <Card>
          <h1>Cadastre uma entrega</h1>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input Icon={FiUser} name="client_name" placeholder="Cliente" />

            <Input Icon={FiCalendar} name="delivery_date" type="date" />

            <Input
              Icon={FiMapPin}
              disabled
              name="origin"
              value={origin[0] ? originParsed : undefined}
              placeholder="Origem"
            />

            <Input
              Icon={FiMapPin}
              disabled
              name="destination"
              value={destination[0] ? destinationParsed : undefined}
              placeholder="Destination"
            />

            <SubmitButton>
              Cadastrar
              <FiSave />
            </SubmitButton>
          </Form>

          <MapArea>
            <MapContainer filled={Number(origin[0])}>
              <h2>Origem</h2>
              <Map getPosition={handleOrigin} />
            </MapContainer>

            <MapContainer filled={Number(destination[0])}>
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
