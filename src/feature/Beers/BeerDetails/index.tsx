import { useParams } from "react-router-dom";
import { Id } from "../../../interfaces/generalInterfaces";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  fetchBeerDetails,
  selectBeerDetails,
  selectBeerDetailsStatus,
} from "./beerDetailsSlice";
import { useEffect } from "react";
import { DetailsTile } from "./DetailsTile";
import { Error } from "../../../common/fetchStates/Error";
import { Loader } from "../../../common/fetchStates/Loader";

export const BeerDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams<Id>();
  const beer = useSelector(selectBeerDetails);
  const stateOfLoading = useSelector(selectBeerDetailsStatus);

  useEffect(() => {
    dispatch(fetchBeerDetails(id));
  }, [dispatch, id]);

  switch (stateOfLoading) {
    case "loading":
      return <Loader />;
    case "success":
      return (
        <>
          {beer.map(
            ({
              id,
              image_url,
              name,
              tagline,
              description,
              abv,
              ibu,
              ingredients,
            }) => (
              <DetailsTile
                key={id}
                image_url={image_url}
                name={name}
                tagline={tagline}
                description={description}
                abv={abv}
                ibu={ibu}
                ingredients={ingredients}
              />
            )
          )}
        </>
      );
    case "error":
      return <Error />;
    default:
      return null;
  }
};
