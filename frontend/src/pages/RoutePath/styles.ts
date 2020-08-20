import styled from 'styled-components';

import { Card as CardComponent } from '../../components/Card';

export const Container = styled.div`
  padding: 32px 0 32px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  max-width: 95%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card = styled(CardComponent)`
  height: 700px;

  h1 {
    margin-bottom: 16px;
    color: #c3deea;
    font-size: calc(min(4vw, 28px));
  }

  td {
    color: black;
  }
`;
