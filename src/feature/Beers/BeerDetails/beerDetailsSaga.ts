import { call, delay, put, takeEvery } from "redux-saga/effects";
import { baseUrl } from "../../../apiValues";
import { DetailsPayload } from "../../../interfaces/generalInterfaces";
import { getBeersFromApi } from "../getBeersFromApi";
import { ApiResponse } from "../../../interfaces/apiResponseInterface";
import {
  fetchBeerDetails,
  fetchBeerDetailsError,
  fetchBeerDetailsSuccess,
} from "./beerDetailsSlice";

function* fetchBeerDetailsHandler({ payload: id }: DetailsPayload) {
  const params = {
    id
  };

  yield delay(300);

  try {
    const beer: ApiResponse = yield call(
      getBeersFromApi<ApiResponse>,
      baseUrl,
      params
    );
    yield put(fetchBeerDetailsSuccess(beer));
  } catch (error) {
    yield put(fetchBeerDetailsError());
  }
}

export function* watchFetchBeerDetails() {
  yield takeEvery(fetchBeerDetails, fetchBeerDetailsHandler);
}