import { rest } from "msw";

import cocktails from "../data/cocktails.json";

export const popularRecipes = rest.get(
  "/api/recipes/popular",
  (req, res, { json }) => {
    const popularRecipesList = cocktails.slice(0, 5);
    return res(
      json({
        data: popularRecipesList,
      })
    );
  }
);
