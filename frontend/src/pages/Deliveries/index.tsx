import React, { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { format, parseISO } from 'date-fns';
import { toast } from 'react-toastify';
import { FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import Header from '../../components/Header';

import {
  Container,
  Wrapper,
  Card,
  ListTitles,
  ListContainer,
  DeliveryList,
  Loading,
} from './styles';

interface Delivery {
  id: string;
  client_name: string;
  delivery_date: string;
  start_point: [number, number];
  end_point: [number, number];
}

type AxiosCallResponse = Delivery;

const Deliveries: React.FC = () => {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadData(): Promise<void> {
      try {
        setLoading(true);

        const response = await api.get<AxiosCallResponse[]>('/deliveries');

        const formattedData = response.data.map(data => {
          const {
            id,
            client_name,
            delivery_date,
            end_point,
            start_point,
          } = data;

          const dateFormatted = format(parseISO(delivery_date), 'dd/MM/yyyy');

          return {
            id,
            client_name,
            delivery_date: dateFormatted,
            start_point,
            end_point,
          };
        });

        setDeliveries(formattedData);
      } catch {
        toast('Erro inesperado, tente novamente mais tarde!', {
          type: 'error',
          pauseOnHover: true,
          progressStyle: { backgroundColor: '#ff0000' },
        });
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Header />
        <Card>
          <h1>Lista de entregas</h1>

          {loading ? (
            <Loading>
              <FaSpinner size={100} color="#495071" />
            </Loading>
          ) : (
            <>
              <ListTitles>
                <strong>Cliente</strong>
                <strong>Data de entrega</strong>
              </ListTitles>

              <ListContainer>
                <PerfectScrollbar
                  style={{ maxHeight: '500px', padding: '5px 15px' }}
                >
                  {deliveries.map(delivery => (
                    <DeliveryList key={delivery.id}>
                      <button type="button">
                        <strong>{delivery.client_name}</strong>
                        <span>{delivery.delivery_date}</span>
                      </button>
                    </DeliveryList>
                  ))}
                </PerfectScrollbar>
              </ListContainer>
            </>
          )}
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Deliveries;
