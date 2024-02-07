import { Recipe } from "types";
import { useTranslation } from "react-i18next";

interface Props {
  recipe: Recipe;
}

export const Card = ({ recipe }: Props) => {
  const { name, category, ingredients, preparation } = recipe;
  const { t } = useTranslation();

  return (
    <div className="box-border flex border border-gray-200 p-4 dark:bg-white/50">
      <div className="block space-y-2">
        <h2 className="text-2xl font-bold">{name}</h2>
        {category && (
          <span className="mr-1 inline-block rounded bg-pink-200 px-2 py-1 text-xs font-semibold uppercase text-gray-800 last:mr-0">
            {category}
          </span>
        )}
        <h3 className="text-lg font-bold">{t("Card.Ingredients")}</h3>
        <ul className="list-inside list-disc px-1 text-sm">
          {ingredients.map((ingredientItem) => {
            if ("ingredient" in ingredientItem) {
              const { unit, amount, ingredient } = ingredientItem;
              return (
                <li key={ingredient}>{`${amount} ${unit} ${ingredient}`}</li>
              );
            }
            const { special } = ingredientItem;
            return <li key={special}>{special}</li>;
          })}
        </ul>

        <h3 className="text-lg font-bold">{t("Card.Preparation")}</h3>
        <div className="text-sm">{preparation}</div>
      </div>
    </div>
  );
};
