import { render, screen, waitFor } from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";
import fetchPopularRecipes from "api/fetchPopularRecipes";
import Homepage from "./index";
import mockData from "../../mocks/data/testPopularRecipes.json";

jest.mock("api/fetchPopularRecipes", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Homepage", () => {
  it("renders home page", async () => {
    fetchPopularRecipes.mockResolvedValue(mockData);

    render(
      <Router>
        <Homepage />
      </Router>
    );

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: "name", level: 2 })
      ).toBeVisible();
    });

    await waitFor(() => {
      expect(screen.getByText("category")).toBeVisible();
    });

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: "Ingredients", level: 3 })
      ).toBeVisible();
    });

    await waitFor(() => {
      expect(screen.getByText("1 unit ingredient")).toBeVisible();
    });

    await waitFor(() => {
      expect(screen.getByText("special")).toBeVisible();
    });

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: "Preparation", level: 3 })
      ).toBeVisible();
    });

    await waitFor(() => {
      expect(screen.getByText("preparation")).toBeVisible();
    });
  });

  it("renders error message", async () => {
    const errorMessage = "Error fetching recipes";
    fetchPopularRecipes.mockRejectedValue(new Error(errorMessage));

    render(
      <Router>
        <Homepage />
      </Router>
    );

    await waitFor(() => {
      expect(
        screen.getByRole("heading", {
          name: "It seems we've mixed up our ingredients and couldn't fetch your cocktails. Please refresh the page or try again later! 🍹",
          level: 1,
        })
      ).toBeVisible();
    });
  });
});
