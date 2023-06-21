import { useSelector } from "react-redux";
import {
  fetchBeerList,
  selectBeerList,
  selectBeerListStatus,
} from "./beerListSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { BeerTile } from "./BeerTile";
import { Pagination } from "../../Pagination";
import { useUrlParameter } from "../../../common/customHooks/useUrlParameter";
import { Container } from "./styled";
import { Loader } from "../../../common/fetchStates/Loader";
import { Error } from "../../../common/fetchStates/Error";

export const BeerList = () => {
  const dispatch = useDispatch();
  const beersList = useSelector(selectBeerList);
  const stateOfLoading = useSelector(selectBeerListStatus);
  const page = useUrlParameter("page");

  useEffect(() => {
    dispatch(fetchBeerList(page));
  }, [dispatch, page]);

  switch (stateOfLoading) {
    case "loading":
      return <Loader />;
    case "success":
      return (
        <>
          <Container>
            {beersList.map(({ id, name, tagline, image_url }) => (
              <BeerTile
                key={id}
                tagline={tagline}
                name={name}
                id={id}
                image_url={image_url}
              />
            ))}
          </Container>
          <Pagination />
        </>
      );
    case "error":
      return <Error />;
    default:
      return null;
  }
};
