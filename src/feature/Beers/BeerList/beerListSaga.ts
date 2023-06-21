import { call, delay, put, takeEvery } from "redux-saga/effects";
import { baseUrl, per_page } from "../../../apiValues";
import {
  fetchBeerList,
  fetchBeerListError,
  fetchBeerListSuccess,
} from "./beerListSlice";
import { ApiResponse } from "../../../interfaces/apiResponseInterface";
import { getBeersFromApi } from "../getBeersFromApi";
import { ListPayload } from "../../../interfaces/generalInterfaces";

function* fetchBeerListHandler({ payload: page }: ListPayload) {
  const params = {
    page: page || "1",
    per_page: per_page,
  };

  yield delay(300);

  try {
    const beer: ApiResponse = yield call(
      getBeersFromApi<ApiResponse>,
      baseUrl,
      params
    );
    yield put(fetchBeerListSuccess(beer));
  } catch (error) {
    yield put(fetchBeerListError());
  }
}

export function* watchFetchBeerList() {
  yield takeEvery(fetchBeerList, fetchBeerListHandler);
}
