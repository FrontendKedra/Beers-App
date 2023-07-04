import { DetailsTileProps } from "../../../../interfaces/generalInterfaces";
import {
  AddAt,
  BeerMetrics,
  Container,
  Description,
  Details,
  Image,
  Ingredient,
  IngredientCategory,
  Ingredients,
  IngredientsList,
  IngredientsTitle,
  Name,
  Tagline,
} from "./styled";
import missingBeer from "../../../../common/images/missingBeer.png";

export const DetailsTile = ({
  image_url,
  name,
  tagline,
  description,
  abv,
  ibu,
  ingredients,
}: DetailsTileProps) => {
  return (
    <Container>
      <Details>
        <Image
          src={!!image_url ? image_url : missingBeer}
          alt={`Image of ${name}`}
        />
        {!!name && <Name>{name}</Name>}
        {!!tagline && <Tagline>{tagline}</Tagline>}
        {!!description && <Description>{description}</Description>}
        {(!!abv || !!ibu) && (
          <BeerMetrics>
            abv: {abv} ibu: {ibu}
          </BeerMetrics>
        )}
      </Details>
      <Ingredients>
        {!!ingredients.hops && !!ingredients.malt && !!ingredients.yeast && (
          <>
            <IngredientsTitle>Ingredients</IngredientsTitle>
            {!!ingredients.hops && (
              <IngredientsList>
                <IngredientCategory>Hops:</IngredientCategory>
                {ingredients.hops.map(({ name, amount, add, attribute }) => (
                  <Ingredient
                    key={`${amount.value}, ${amount.unit}, ${name}, ${attribute}`}
                  >
                    {name}, {amount.value} {amount.unit}, {attribute}, <br />
                    <AddAt>Add at: {add}</AddAt>
                  </Ingredient>
                ))}
              </IngredientsList>
            )}
            {!!ingredients.malt && (
              <IngredientsList>
                <IngredientCategory>Malt:</IngredientCategory>
                {ingredients.malt.map(({ name, amount }) => (
                  <Ingredient key={`${amount.value}, ${amount.unit}, ${name}`}>
                    {name}, {amount.value} {amount.unit}
                  </Ingredient>
                ))}
              </IngredientsList>
            )}
            {!!ingredients.yeast && (
              <IngredientsList>
                <IngredientCategory>Yeast:</IngredientCategory>
                <Ingredient>{ingredients.yeast}</Ingredient>
              </IngredientsList>
            )}
          </>
        )}
      </Ingredients>
    </Container>
  );
};
