import styled, { css } from 'styled-components';

import { Card as CardComponent } from '../../components/Card';

interface MapContainerProps {
  filled: number;
}

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
  h1 {
    margin-bottom: 16px;
    color: #c3deea;
    font-size: calc(min(4vw, 28px));
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  color: #c3deea;
  background: #33395c;
  border-radius: 6px;
  border: 1px outset #414976;
  width: 200px;
  height: 50px;
  transition: all 200ms;

  &:active {
    color: #33ff33;

    > svg {
      color: #c3deea !important;
    }
  }

  &:hover svg {
    color: #33ff33;
  }

  > svg {
    margin-left: 8px;
  }
`;

export const MapArea = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MapContainer = styled.div<MapContainerProps>`
  text-align: center;

  h2 {
    margin-bottom: 12px;
    color: #c3deea;
    font-size: calc(min(4vw, 18px));
    letter-spacing: 1px;

    ${({ filled }) =>
      filled &&
      css`
        color: #33ff33;
      `}
  }

  .leaflet-container {
    border-radius: 8px;
    box-shadow: 0 -1px 2px 2px #a4cfdf;
  }
`;
