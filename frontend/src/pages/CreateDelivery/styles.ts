import styled, { css } from 'styled-components';

import { Card as CardComponent } from '../../components/Card';

import { colors } from '../../styles/colors';

interface MapContainerProps {
  filled: number;
}

export const Container = styled.div`
  padding: 32px 24px 32px;
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
  h1 {
    margin-bottom: 16px;
    color: ${colors.titleInPrimary};
    font-size: calc(min(4vw, 28px));
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 424px;
    width: 100%;
  }

  .origin-form,
  .destination-form {
    margin-top: 12px;
    width: 100%;

    > h3 {
      background-color: rgba(0, 0, 0, 0.1);
      color: ${colors.textInPrimaryLight};
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 100%;
      min-height: 38px;
      font-size: 14px;
      padding: 8px;
    }

    > div {
      background: ${colors.textInPrimaryDark};
      margin-top: 12px;

      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100%;
      align-items: center;
      background: #2a304d;
      border-radius: 8px;
      border: none;
      color: ${colors.textInPrimary};
      border-radius: 2px;
      transition: all 400ms;

      input {
        border: 0;
        border-radius: 0;
      }

      button {
        height: 40px;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${colors.textInPrimaryLight};
        transition: all 400ms;
        border: 2px solid ${colors.textInPrimaryDark};
        border-left: 0;

        &:hover {
          color: ${colors.iconOnHover};
        }
      }
    }
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  color: ${colors.titleInPrimary};
  background: none;
  border-radius: 6px;
  border: 2px solid ${colors.textInPrimaryDark};
  width: 200px;
  height: 50px;
  letter-spacing: 0.5px;
  transition: all 200ms;

  &:active {
    color: ${colors.textInPrimary};
    background-color: ${colors.primaryDarker};

    > svg {
      color: ${colors.titleInPrimary} !important;
    }
  }

  &:hover svg {
    color: ${colors.iconOnHover};
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
  width: 100%;
  height: 100%;

  @media (max-width: 1500px) {
    margin-top: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const MapContainer = styled.div<MapContainerProps>`
  text-align: center;
  width: 100%;
  min-height: 300px;

  & + div {
    margin-left: 12px;
  }

  h2 {
    margin-bottom: 12px;
    color: ${colors.titleInPrimary};
    font-size: calc(min(4vw, 18px));
    letter-spacing: 1px;

    ${({ filled }) =>
      filled &&
      css`
        color: ${colors.iconOnHover};
      `}
  }

  .leaflet-container {
    border-radius: 8px;
    box-shadow: 0 -1px 2px 2px ${colors.primaryDarker};
    width: 100%;
    height: 400px;
  }

  @media (max-width: 1500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 !important;
  }
`;
