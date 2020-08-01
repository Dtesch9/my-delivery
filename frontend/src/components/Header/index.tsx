import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <NavLink
        exact
        to="/"
        activeStyle={{ color: '#33ffd6' }}
        className="header-cadastro"
      >
        Cadastro
      </NavLink>
      <NavLink
        to="/deliveries"
        activeStyle={{ color: '#33ffd6' }}
        className="header-entregas"
      >
        Entregas
      </NavLink>
    </Container>
  );
};

export default Header;
