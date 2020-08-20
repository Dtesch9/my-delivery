import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Container = styled.div`
  padding: 32px 128px 32px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1440px;
  width: 100%;
  background: ${colors.primaryDark};
  border-radius: 8px;
  margin-bottom: 12px;
  border: 2px inset ${colors.titleInHighlight};

  @media (max-width: 1125px) {
    width: 100%;
  }

  @media (max-width: 520px) {
    padding: 16px 68px 16px;
    flex-direction: column;

    a + a {
      margin-top: 12px;
    }
  }

  a {
    color: ${colors.titleInPrimary};
    text-transform: uppercase;
    border: none;
    transition: all 400ms;
    font-size: 14px;

    &:hover {
      color: ${colors.iconOnHover};
    }
  }
`;
