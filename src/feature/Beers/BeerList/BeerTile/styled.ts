import { Link } from "react-router-dom";
import styled from "styled-components";

export const BeerLink = styled(Link)`
  text-decoration: none;
`;

export const Container = styled.div`
  display: grid;
  justify-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.black};
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  width: 100%;
  height: 100%;
  text-align: center;
  grid-template-rows: auto 1fr;
  transition: 0.3s;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    gap: 8px;
    padding: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    gap: 6px;
    padding: 10px;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const Image = styled.img`
  width: 30px;
  height: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 25px;
    height: 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 20px;
    height: 60px;
  }
`;

export const Name = styled.header`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.scorpion};
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 11px;
  }
`;

export const RhombusIcon = styled.img`
  width: 10px;
  height: 10px;
  margin-bottom: -13px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 9px;
    height: 9px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 8px;
    height: 8px;
  }
`;

export const Tagline = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.doveGray};
  padding-top: 10px;
  border-top: 1px solid ${({ theme }) => theme.colors.silver};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 11px;
  }
`;
