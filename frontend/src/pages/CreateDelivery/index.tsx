import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { toast } from 'react-toastify';
import { isAfter } from 'date-fns';
import * as Yup from 'yup';
import {
  FiUser,
  FiCalendar,
  FiMapPin,
  FiCodesandbox,
  FiSearch,
} from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Geocode, { GeoCodingResponse } from 'react-geocode';

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
  const [originAddress, setOriginAddress] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');

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

  const getGeocode = useCallback(async (address: string) => {
    Geocode.setApiKey(`${process.env.REACT_APP_GOOGLE_API_KEY}`);

    const response: GeoCodingResponse = await Geocode.fromAddress(
      address,
      undefined,
      'pt',
      'BR',
    );

    return response.results[0];
  }, []);

  const handleSearchOrigemGeocode = useCallback(
    async (data: { origin: string }) => {
      const response = await getGeocode(data.origin);

      const { formatted_address, geometry } = response;

      const { location } = geometry;

      setOriginAddress(formatted_address);
      setOrigin([location.lat, location.lng]);
    },
    [getGeocode],
  );

  const handleSearchDestinationGeocode = useCallback(
    async (data: { destination: string }) => {
      const response = await getGeocode(data.destination);

      const { formatted_address, geometry } = response;

      const { location } = geometry;

      setDestinationAddress(formatted_address);
      setDestination([location.lat, location.lng]);
    },
    [getGeocode],
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

            <Input
              data-testid="delivery_date"
              Icon={FiCalendar}
              name="delivery_date"
              type="date"
            />
          </Form>

          <Form onSubmit={handleSearchOrigemGeocode} className="origin-form">
            <h3>{originAddress || 'Busque por endereço ou CEP'}</h3>

            <div aria-label="Search location input container">
              <Input
                containerStyle={{ marginTop: 0, borderRadius: '0' }}
                Icon={FiMapPin}
                name="origin"
                placeholder="Origem"
                value={originAddress || undefined}
                isFocusedNow={() => setOriginAddress('')}
              />

              <button type="submit">
                <FiSearch />
              </button>
            </div>
          </Form>

          <Form
            onSubmit={handleSearchDestinationGeocode}
            className="destination-form"
          >
            <h3>{destinationAddress || 'Busque por endereço ou CEP'}</h3>

            <div aria-label="Search location input container">
              <Input
                containerStyle={{ marginTop: 0, borderRadius: '0' }}
                Icon={FiMapPin}
                name="destination"
                placeholder="Destino"
                value={destinationAddress || undefined}
                isFocusedNow={() => setDestinationAddress('')}
              />

              <button type="submit">
                <FiSearch />
              </button>
            </div>
          </Form>

          <SubmitButton onClick={() => formRef.current?.submitForm()}>
            Cadastrar
            <FiCodesandbox />
          </SubmitButton>

          <MapArea>
            <MapContainer filled={Number(origin[0])}>
              <h2>Origem</h2>
              <Map getPosition={handleOrigin} hasNewPosition={origin} />
            </MapContainer>

            <MapContainer filled={Number(destination[0])}>
              <h2>Destino</h2>
              <Map
                getPosition={handleDestination}
                hasNewPosition={destination}
              />
            </MapContainer>
          </MapArea>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default CreateDelivery;
