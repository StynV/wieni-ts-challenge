import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/main";

import { Homepage, Recipes, NotFound } from "./pages";

export const ROUTES = {
  HOME: "/",
  RECIPES: "/recipes",
  NOTFOUND: "*",
};

export const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<Homepage />} />
        <Route path={ROUTES.RECIPES} element={<Recipes />} />
        <Route path={`${ROUTES.RECIPES}/:pageNumber`} element={<Recipes />} />
        <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
};
