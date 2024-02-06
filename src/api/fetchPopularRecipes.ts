import { ResponsePopularRecipe } from "types/ResponsePopularRecipe";

const fetchPopularRecipes = async (): Promise<ResponsePopularRecipe> => {
  const response = await fetch("/api/recipes/popular");

  if (!response.ok) {
    throw new Error("Error fetching recipes");
  }

  return response.json();
};

export default fetchPopularRecipes;
