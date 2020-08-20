import styled, { keyframes } from 'styled-components';

import { Card as CardComponent } from '../../components/Card';

import { colors } from '../../styles/colors';

const rotate = keyframes`
 from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
    
  }
`;

export const Container = styled.div`
  padding: 32px 0 32px;
  width: 100%;
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
  > h1 {
    margin-bottom: 24px;
    color: ${colors.titleInPrimary};
    font-size: calc(min(4vw, 28px));
  }
`;

export const ListTitles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  margin: 12px 0 12px;

  strong {
    font-size: 20px;
    color: #bbc3e0;
  }
`;

export const ListContainer = styled.ul`
  margin-top: 24px;
  width: 90%;
  height: 100%;
`;

export const DeliveryList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 56px;
  border-top: 1px solid ${colors.textInPrimaryLight};
  border-bottom: 1px solid ${colors.textInPrimaryLight};
  border-radius: 4px;
  transition: all 500ms;

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
  }

  & + li {
    margin-top: 18px;
  }

  &:hover {
    transform: translateX(-15px);
  }

  strong {
    margin-left: 19.5%;
    font-size: 16px;
    line-height: 16px;
    color: ${colors.textInPrimaryLight};
    font-weight: 400;

    @media (max-width: 1500px) {
      margin-left: 18%;
    }

    @media (max-width: 1300px) {
      margin-left: 16%;
    }

    @media (max-width: 1050px) {
      margin-left: 14%;
    }

    @media (max-width: 885px) {
      margin-left: 12%;
    }
  }

  span {
    margin-right: 20%;
    font-size: 14px;
    color: ${colors.textInPrimaryLight};

    @media (max-width: 1500px) {
      margin-right: 18%;
    }

    @media (max-width: 1300px) {
      margin-right: 16%;
    }

    @media (max-width: 1050px) {
      margin-right: 14%;
    }

    @media (max-width: 885px) {
      margin-right: 12%;
    }
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;
