import { all } from "redux-saga/effects";
import { watchFetchBeerList } from "./feature/Beers/BeerList/beerListSaga";
import { watchFetchBeerDetails } from "./feature/Beers/BeerDetails/beerDetailsSaga";

export default function* rootSaga() {
  yield all([watchFetchBeerList(), watchFetchBeerDetails()]);
}
