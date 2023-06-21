import { Container, Icon, LoadingParagraph } from "./styled";

export const Loader = () => (
  <Container>
    <LoadingParagraph>
      Proszę czekać,
      <br />
      trwa ładowanie
    </LoadingParagraph>
    <Icon />
  </Container>
);
