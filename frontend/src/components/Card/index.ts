import styled, { keyframes } from 'styled-components';

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

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px 16px;
  max-width: 1200px;
  width: 100%;
  background: #2a304d;
  border-radius: 20px;
  box-shadow: 2px 16px 24px 6px #495071;

  animation: ${translateY} 1.5s;
`;
