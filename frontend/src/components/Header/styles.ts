import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px 128px 32px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 70vw;
  background: #232842;
  border-radius: 8px;
  margin-bottom: 12px;
  border: 2px inset #33ffd6;

  @media (max-width: 520px) {
    flex-direction: column;

    a + a {
      margin-top: 12px;
    }
  }

  a {
    color: #c3deea;
    text-transform: uppercase;
    border: none;
    transition: all 400ms;

    &:hover {
      color: #33ffd6;
      opacity: 0.8;
    }
  }
`;