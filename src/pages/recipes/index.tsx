import fetchRecipes from "api/fetchRecipes";
import { Card } from "components/card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Recipe } from "types";
import { useTranslation } from "react-i18next";

const Recipes = () => {
  const PAGE_LIMIT: number = 8;

  const { pageNumber } = useParams<{ pageNumber?: string }>();
  const currentPageNumber = pageNumber ? parseInt(pageNumber, 10) : 1;
  const offset =
    currentPageNumber === 1 ? 0 : (currentPageNumber - 1) * PAGE_LIMIT;

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [fetchError, setFetchError] = useState("");

  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await fetchRecipes(PAGE_LIMIT, offset);
        setRecipes(apiData.data);
      } catch (error) {
        setFetchError(t("Fetch.Error"));
        // eslint-disable-next-line no-console
        console.error(`Fetching data failed: ${error}`);
      }
    };

    fetchData();
  }, [offset, t]);

  if (fetchError !== "") {
    return (
      <main>
        <h1 className="text-3xl">{fetchError}</h1>
      </main>
    );
  }

  return (
    <main>
      <div className="grid grid-cols-1 gap-2.5 md:grid-cols-4">
        {recipes.map((recipe) => (
          <Card recipe={recipe} key={recipe.name} />
        ))}
      </div>
    </main>
  );
};

export default Recipes;
