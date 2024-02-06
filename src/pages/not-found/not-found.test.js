import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NotFound from "./index";
import "../../store/i18nTests.ts";

describe("Recipes page", () => {
  it("renders not found message", () => {
    render(
      <Router>
        <NotFound />
      </Router>
    );

    expect(
      screen.getByRole("heading", {
        name: /NotFound.Intro NotFound.Link NotFound.Outro/i,
      })
    ).toBeVisible();
  });
});
