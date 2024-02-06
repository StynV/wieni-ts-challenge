import { Recipe } from "./Recipe";

export type ResponseRecipe = {
  data: Recipe[];
  limit: number;
  offset: number;
  params: any;
  total: number;
};
