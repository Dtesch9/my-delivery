import styled from 'styled-components';

import { Card as CardComponent } from '../../components/Card';

import { colors } from '../../styles/colors';

export const Container = styled.div`
  padding: 32px 0 32px;
  height: 100%;
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
  height: 750px;

  h1 {
    margin-bottom: 16px;
    color: ${colors.titleInPrimary};
    font-size: calc(min(4vw, 28px));
  }

  .leaflet-container {
    margin-bottom: 48px;
  }

  @media (max-width: 1125px) {
    width: 100%;
    height: 600px;

    .leaflet-right {
      display: none;
    }
  }

  td {
    color: black;
  }
`;
