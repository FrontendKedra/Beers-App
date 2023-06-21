import styled from "styled-components";
import { ReactComponent as PreviousArrow } from "./icons/previousArrow.svg";
import { ReactComponent as NextArrow } from "./icons/nextArrow.svg";

export const PageChanger = styled.div`
  margin: 40px 0px 87px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: 32px 0px 87px 0px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin: 32px 0px 15px 0px;
  }
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  transition: 0.2s;
  background-color: transparent;
  margin: 16px;
  padding: 0;
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    color: ${({ theme }) => theme.colors.gray};
  }

  &:disabled {
    cursor: not-allowed;

    &:hover {
      color: ${({ theme }) => theme.colors.black};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 13px;
    margin: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 12px;
    margin: 10px;
  }
`;

export const ArrowPrevious = styled(PreviousArrow)`
  height: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    height: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    height: 6px;
  }
`;

export const ArrowNext = styled(NextArrow)`
  height: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    height: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    height: 6px;
  }
`;

export const PageCounter = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.orange};
  padding: 6px 10px;
  border-radius: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 4px 8px;
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    padding: 2px 6px;
  }
`;
