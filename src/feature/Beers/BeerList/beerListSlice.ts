import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { BeerListState } from "../../../interfaces/generalInterfaces";

const initialState: BeerListState = {
  status: "initial",
  beer: [],
};

const beerListSlice = createSlice({
  name: "beerList",
  initialState,
  reducers: {
    fetchBeerList: (state, { payload }) => {
      state.status = "loading";
    },
    fetchBeerListSuccess: (state, { payload: beer }) => {
      state.status = "success";
      state.beer = beer;
    },
    fetchBeerListError: (state) => {
      state.status = "error";
    },
  },
});

export const { fetchBeerList, fetchBeerListSuccess, fetchBeerListError } =
  beerListSlice.actions;

export const selectBeerListState = (state: RootState) => state.beerList;

export const selectBeerListStatus = (state: RootState) =>
  selectBeerListState(state).status;

export const selectBeerList = (state: RootState) =>
  selectBeerListState(state).beer;

export default beerListSlice.reducer;
