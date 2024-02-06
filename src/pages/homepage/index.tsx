import fetchPopularRecipes from "api/fetchPopularRecipes";
import { Card } from "components/card";
import { useEffect, useState } from "react";
import { Recipe } from "types";

// TODO: REMOVE THIS CODE AND IMPLEMENT A NICE GRID!
const Homepage = () => {
  const [recipes, setPopularRecipes] = useState<Recipe[]>([]);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await fetchPopularRecipes();
        setPopularRecipes(apiData.data);
      } catch (error) {
        setFetchError(
          "It seems we've mixed up our ingredients and couldn't fetch your cocktails. Please refresh the page or try again later! 🍹"
        );
        // eslint-disable-next-line no-console
        console.error(`Fetching data failed: ${error}`);
      }
    };

    fetchData();
  }, []);

  if (fetchError !== "") {
    return (
      <main>
        <h1 className="text-3xl">{fetchError}</h1>
      </main>
    );
  }

  return (
    <main>
      <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2">
        {recipes.map((recipe) => (
          <Card recipe={recipe} key={recipe.name} />
        ))}
      </div>
    </main>
  );
};

export default Homepage;
