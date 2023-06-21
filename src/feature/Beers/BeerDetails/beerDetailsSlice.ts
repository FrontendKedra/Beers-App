import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { ApiResponse } from "../../../interfaces/apiResponseInterface";

interface BeerDetailsState {
  status: string;
  beerDetails: ApiResponse[];
}

const initialState: BeerDetailsState = {
  status: "initial",
  beerDetails: [],
};

const beerDetailsSlice = createSlice({
  name: "beerDetails",
  initialState,
  reducers: {
    fetchBeerDetails: (state, { payload }) => {
      state.status = "loading";
    },
    fetchBeerDetailsSuccess: (state, { payload: beerDetails }) => {
      state.status = "success";
      state.beerDetails = beerDetails;
    },
    fetchBeerDetailsError: (state) => {
      state.status = "error";
    },
  },
});

export const {
  fetchBeerDetails,
  fetchBeerDetailsSuccess,
  fetchBeerDetailsError,
} = beerDetailsSlice.actions;

export const selectBeerDetailsState = (state: RootState) => state.beerDetails;

export const selectBeerDetailsStatus = (state: RootState) =>
  selectBeerDetailsState(state).status;
export const selectBeerDetails = (state: RootState) =>
  selectBeerDetailsState(state).beerDetails;

export default beerDetailsSlice.reducer;
