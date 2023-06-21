import { Ingredients } from "./apiResponseInterface";

export interface Id {
  id: string;
}

export interface IndexSingature {
  [index: string]: string;
}

export interface DetailsPayload {
  payload: string;
}

export interface ListPayload {
  payload: string
}

export interface BeerTileProps {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
}

export interface DetailsTileProps {
  image_url: string;
  name: string;
  tagline: string;
  description: string;
  abv: number;
  ibu: number;
  ingredients: Ingredients;
}

export type UsePageNumber = [number, (pageNumber: number) => void];
