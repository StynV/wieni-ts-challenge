import fetchPopularRecipes from "api/fetchPopularRecipes";
import { Card } from "components/card";
import { useEffect, useState } from "react";
import { Recipe } from "types";
import { useTranslation } from "react-i18next";

const Homepage = () => {
  const [recipes, setPopularRecipes] = useState<Recipe[]>([]);
  const [fetchError, setFetchError] = useState("");

  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await fetchPopularRecipes();
        setPopularRecipes(apiData.data);
      } catch (error) {
        setFetchError(t("Fetch.Error"));
        // eslint-disable-next-line no-console
        console.error(`Fetching data failed: ${error}`);
      }
    };

    fetchData();
  }, [t]);

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
