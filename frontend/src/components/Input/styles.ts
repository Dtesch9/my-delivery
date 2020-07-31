import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: number;
  isFilled: number;
}

export const Container = styled.div<ContainerProps>`
  margin-top: 12px;
  display: flex;
  align-items: center;
  max-width: calc(min(424px, 100%));
  width: 50vw;
  height: 4.5vh;
  border-radius: 8px;
  transition: all 500ms;
  border: 1px inset #414976;
  ${({ isFocused }) =>
    isFocused &&
    css`
      box-shadow: 2px 1px 4px 1px #8991be;
    `};

  svg {
    margin: 0 8px 0 8px;
    font-size: 3vh;
    transition: all 500ms;
    color: ${({ isFocused, isFilled }) =>
      isFocused || isFilled ? '#0d0f' : '#8991BE'};
  }

  input {
    width: 100%;
    height: 100%;
    background: #2a304d;
    border-radius: 8px;
    border: none;
    color: #8991be;

    &::placeholder {
      color: #8991a9;
      font-size: calc(min(4.5vw, 20px));
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
`;
