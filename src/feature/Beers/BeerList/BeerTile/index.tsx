import { BeerTileProps } from "../../../../interfaces/generalInterfaces";
import {
  BeerLink,
  Container,
  Image,
  InfoBox,
  Name,
  RhombusIcon,
  Tagline,
} from "./styled";
import rhombus from "./icons/rhombus.png";
import missingBeer from "../../../../common/images/missingBeer.png";

export const BeerTile = ({ id, name, tagline, image_url }: BeerTileProps) => {
  return (
    <BeerLink to={`/beer/details/${id}`}>
      {!!name && !!tagline && (
        <Container>
          <Image
            src={!!image_url ? image_url : missingBeer}
            alt={`Image of ${name}`}
          />
          <InfoBox>
            {!!name && <Name>{name}</Name>}
            <RhombusIcon src={rhombus}></RhombusIcon>
            {!!tagline && <Tagline>{tagline}</Tagline>}
          </InfoBox>
        </Container>
      )}
    </BeerLink>
  );
};
