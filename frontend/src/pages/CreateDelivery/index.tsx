import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { FiUser, FiCalendar } from 'react-icons/fi';

import Input from '../../components/Input';

import { Container, Wrapper, Card } from './styles';

const CreateDelivery: React.FC = () => {
  const handleSubmit = useCallback(() => {}, []);

  return (
    <Container>
      <Wrapper>
        <Card>
          <h1>Cadastre uma entrega</h1>

          <Form onSubmit={handleSubmit}>
            <Input Icon={FiUser} name="client_name" placeholder="Cliente" />
            <Input
              Icon={FiCalendar}
              name="client_name"
              type="date"
              placeholder="Data de entrega"
            />
          </Form>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default CreateDelivery;
