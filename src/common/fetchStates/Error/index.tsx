import { Container, DangerIcon, ErrorMessage, Header, Link } from "./styled";

export const Error = () => (
  <Container>
    <DangerIcon />
    <Header>Coś poszło nie tak...</Header>
    <ErrorMessage>
      Sprawdź połączenie z internetem
      <br /> i spróbuj ponownie
    </ErrorMessage>
    <Link to={"/"}>Wróć na stronę główną</Link>
  </Container>
);
