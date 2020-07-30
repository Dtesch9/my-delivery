import styled from 'styled-components';

export const Container = styled.div`
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
  padding: 32px;
  width: 75vh;
  height: 75vh;
  background: #2a304d;
  border-radius: 20px;
  box-shadow: 2px 16px 24px 6px #495071;

  h1 {
    margin-bottom: 24px;
    color: #8991be;
  }
`;
