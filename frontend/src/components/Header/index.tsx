import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <NavLink exact to="/" activeStyle={{ color: '#33ffd6' }}>
        Cadastro
      </NavLink>
      <NavLink to="/deliveries" activeStyle={{ color: '#33ffd6' }}>
        List
      </NavLink>
    </Container>
  );
};

export default Header;
