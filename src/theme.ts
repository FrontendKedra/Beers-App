import { IndexSingature } from "./interfaces/generalInterfaces";

export interface Theme {
  colors: IndexSingature;
  breakpoints: IndexSingature;
}

export const theme = {
  colors: {
    white: "#ffffff",
    black: "#252525",
    orange: "#f5b557",
    darkOrange: "#f69d1a",
    lightGray: "#e9e4e4",
    silver: "#ccc5c5",
    gray: "#8c8787",
    doveGray: "#736f6f",
    scorpion: "#615d5d",
    blue: "#0044CC",
    lightBlue: "#0055ff",
    eastSide: "#987EC6",
    bermudaGray: "#6e8ea8",
  },
  breakpoints: {
    small: "460px",
    medium: "730px",
    large: "992px",
    largest: "1200px",
  },
};
