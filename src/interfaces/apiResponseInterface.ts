interface Volume {
  value: number;
  unit: string;
}

interface Temp {
  value: number;
  unit: string;
}

interface MashTemp {
  temp: Temp;
  duration: number;
}

interface Fermentation {
  temp: Temp;
}

interface Ingredient {
  name: string;
  amount: Volume;
}

interface Hop extends Ingredient {
  add: string;
  attribute: string;
}

interface Method {
  mash_temp: MashTemp[];
  fermentation: Fermentation;
  twist: null;
}

export interface Ingredients {
  malt: Ingredient[];
  hops: Hop[];
  yeast: string;
}

export interface ApiResponse {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: Volume;
  boil_volume: Volume;
  method: Method;
  ingredients: Ingredients;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}
