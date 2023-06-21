import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: 150px;
  background-color: red;
  margin-bottom: 100px;
  display: grid;
  align-items: center;
  justify-items: center;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.eastSide},
    ${({ theme }) => theme.colors.bermudaGray}
  );

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    height: 120px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    height: 110px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    height: 100px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    height: 80px;
  }
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.darkOrange};
  margin: 0;
  font-size: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 16px;
  }

  &::first-letter {
    font-size: 48px;

    @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
      font-size: 40px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
      font-size: 36px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
      font-size: 32px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
      font-size: 28px;
    }
  }
`;
