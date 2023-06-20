import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import beerListReducer from "./feature/Beers/BeerList/beerListSlice";
import beerDetailsReducer from "./feature/Beers/BeerDetails/beerDetailsSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    beerList: beerListReducer,
    beerDetails: beerDetailsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
