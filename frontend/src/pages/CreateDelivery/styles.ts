import styled, { css, keyframes } from 'styled-components';

interface MapContainerProps {
  filled: number;
}

const translateY = keyframes`
  0% {
    transform: translateY(-100px);
  }
  60% {
    transform: translateY(50px);
  }
  100% {
    transform: translateY(0);
  }
`;

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
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0 16px;
  min-height: 500px;
  width: 70vw;
  height: calc(max(75vh, 600px));
  background: #2a304d;
  border-radius: 20px;
  box-shadow: 2px 16px 24px 6px #495071;

  animation: ${translateY} 1.5s;

  h1 {
    margin-bottom: 24px;
    color: #c3deea;
    font-size: calc(min(4vw, 32px));
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
    color: #0d0f;

    > svg {
      color: #c3deea !important;
    }
  }

  &:hover svg {
    color: #0d0f;
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
    font-size: calc(min(4vw, 24px));
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
