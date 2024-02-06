import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NotFound from "./index";

it("renders not found message", () => {
  render(
    <Router>
      <NotFound />
    </Router>
  );

  expect(
    screen.getByRole("heading", {
      name: /Looks like you've stirred the wrong drink./i,
    })
  ).toBeVisible();

  expect(
    screen.getByRole("link", { name: "back to the homepage" })
  ).toBeVisible();

  expect(
    screen.getByRole("heading", {
      name: /, where the real party is! 🍸/i,
    })
  ).toBeVisible();
});
