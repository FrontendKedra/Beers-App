import { Container, HomeLink, Title } from "./styled";

export const Header = () => {
  return (
    <Container>
      <HomeLink to={"/"}>
        <Title>Beers</Title>
      </HomeLink>
    </Container>
  );
};
