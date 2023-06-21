import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 48px;
  margin: 0 auto;
  max-width: 700px;
  padding: 0 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 36px;
    max-width: 450px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-template-columns: 1fr;
    gap: 24px;
    max-width: 250px;
  }
`;
