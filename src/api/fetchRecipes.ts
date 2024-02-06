import { ResponseRecipe } from "types/ResponseRecipe";

const fetchRecipes = async (
  pageLimit: number,
  offset: number
): Promise<ResponseRecipe> => {
  const response = await fetch(
    `/api/recipes/all?limit=${pageLimit}&offset=${offset}`
  );

  if (!response.ok) {
    throw new Error("Error fetching recipes");
  }

  return response.json();
};

export default fetchRecipes;
