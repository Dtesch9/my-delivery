import styled from 'styled-components';

import { colors } from '../../styles/colors';

interface ContainerProps {
  isFocused: number;
  isFilled: number;
}

export const Container = styled.div<ContainerProps>`
  margin-top: 12px;
  display: flex;
  align-items: center;
  max-width: 424px;
  width: 100%;
  height: 40px;
  border-radius: 2px;
  transition: all 500ms;
  border: 2px solid ${colors.textInPrimaryDark};

  svg {
    margin: 0 8px 0 8px;
    font-size: 3vh;
    transition: all 500ms;
    color: ${({ isFocused, isFilled }) =>
      isFocused || isFilled
        ? `${colors.iconOnHover}`
        : `${colors.textInPrimary}`};
  }

  input {
    width: 100%;
    height: 100%;
    background: ${colors.primary};
    border-radius: 8px;
    border: none;
    color: ${colors.textInPrimary};

    &::placeholder {
      color: ${colors.textInSecundary};
      font-size: calc(min(4.5vw, 18px));
    }
  }
`;
