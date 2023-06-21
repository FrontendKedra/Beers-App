import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  max-width: 50%;
  margin: 0 auto 48px auto;
  padding: 48px;
  gap: 24px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.silver};

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    max-width: 60%;
    padding: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    max-width: 70%;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    max-width: 70%;
    padding: 24px;
  }
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-items: center;
  gap: 16px 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    gap: 12px;
  }
`;

export const Image = styled.img`
  height: 380px;
  grid-row: span 4;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    height: 180px;
    grid-row: span 4;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    height: 160px;
  }
`;

export const Name = styled.h2`
  font-weight: 600;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.black};
  word-break: break-word;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 13px;
  }
`;

export const Tagline = styled.header`
  font-weight: 500;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 12px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 16px;
    grid-column: span 2;
    grid-row-start: 5;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 12px;
  }
`;

export const BeerMetrics = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 12px;
    line-height: 130%;
  }
`;

export const Ingredients = styled.div`
  display: grid;
  justify-items: center;
  align-items: baseline;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  border-top: 1px solid ${({ theme }) => theme.colors.silver};

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    gap: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    justify-items: baseline;
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const IngredientsTitle = styled.h3`
  justify-self: center;
  grid-column: span 3;
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-column: span 1;
    font-size: 16px;
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    gap: 6px;
    font-size: 14px;
  }
`;

export const IngredientsList = styled.ul`
  display: grid;
  gap: 12px;
  margin: 0;
  padding-left: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    gap: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    gap: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    gap: 6px;
  }
`;

export const IngredientCategory = styled.h4`
  font-size: 16px;
  margin-bottom: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    gap: 6px;
    font-size: 12px;
  }
`;

export const Ingredient = styled.li`
  font-size: 14px;
  line-height: 140%;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 11px;
  }
`;

export const AddAt = styled.span`
  font-weight: 500;
`;
