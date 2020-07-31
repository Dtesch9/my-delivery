import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Header from '../../components/Header';

import {
  Container,
  Wrapper,
  Card,
  ListTitles,
  ListContainer,
  DeliveryList,
} from './styles';

const Deliveries: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Card>
          <h1>Lista de entregas</h1>

          <ListTitles>
            <strong>Cliente</strong>
            <strong>Data de entrega</strong>
          </ListTitles>

          <ListContainer>
            <PerfectScrollbar
              style={{ maxHeight: '500px', padding: '5px 15px' }}
            >
              <DeliveryList>
                <button type="button">
                  <strong>Douglas Tesch</strong>
                  <span>12/10/2020</span>
                </button>
              </DeliveryList>

              <DeliveryList>
                <button type="button">
                  <strong>Douglas Tesch</strong>
                  <span>12/10/2020</span>
                </button>
              </DeliveryList>
              <DeliveryList>
                <button type="button">
                  <strong>Douglas Tesch</strong>
                  <span>12/10/2020</span>
                </button>
              </DeliveryList>
              <DeliveryList>
                <button type="button">
                  <strong>Douglas Tesch</strong>
                  <span>12/10/2020</span>
                </button>
              </DeliveryList>
              <DeliveryList>
                <button type="button">
                  <strong>Douglas Tesch</strong>
                  <span>12/10/2020</span>
                </button>
              </DeliveryList>
              <DeliveryList>
                <button type="button">
                  <strong>Douglas Tesch</strong>
                  <span>12/10/2020</span>
                </button>
              </DeliveryList>
              <DeliveryList>
                <button type="button">
                  <strong>Douglas Tesch</strong>
                  <span>12/10/2020</span>
                </button>
              </DeliveryList>
              <DeliveryList>
                <button type="button">
                  <strong>Douglas Tesch</strong>
                  <span>12/10/2020</span>
                </button>
              </DeliveryList>
              <DeliveryList>
                <button type="button">
                  <strong>Douglas Tesch</strong>
                  <span>12/10/2020</span>
                </button>
              </DeliveryList>
            </PerfectScrollbar>
          </ListContainer>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Deliveries;
