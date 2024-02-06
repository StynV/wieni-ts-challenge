import type { Ingredient } from "./Ingredient";

export type Recipe = {
  name: string;
  glass: string;
  category?: string;
  ingredients: Ingredient[];
  garnish: string;
  preparation: string;
};
