import React from 'react';
import { NavLink } from 'react-router-dom';

import { colors } from '../../styles/colors';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <NavLink
        exact
        to="/"
        activeStyle={{ color: `${colors.titleInHighlight}` }}
        className="header-cadastro"
      >
        Cadastro
      </NavLink>
      <NavLink
        to="/deliveries"
        activeStyle={{ color: `${colors.titleInHighlight}` }}
        className="header-entregas"
      >
        Entregas
      </NavLink>
    </Container>
  );
};

export default Header;
