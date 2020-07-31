import styled from 'styled-components';

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
  padding: 32px;
  min-height: 500px;
  width: 70vw;
  height: 75vh;
  background: #2a304d;
  border-radius: 20px;
  box-shadow: 2px 16px 24px 6px #495071;

  h1 {
    margin-bottom: 24px;
    color: #8991be;
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

export const MapArea = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
