import { render, screen, waitFor } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import fetchRecipes from "api/fetchRecipes";
import Homepage from "./index";
import mockData from "../../mocks/data/testRecipes.json";

jest.mock("api/fetchRecipes", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Recipes page", () => {
  it("renders recipes", async () => {
    fetchRecipes.mockResolvedValue(mockData);

    render(
      <MemoryRouter initialEntries={["/recipes/1"]}>
        <Homepage />
      </MemoryRouter>
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
    fetchRecipes.mockRejectedValue(new Error(errorMessage));

    render(
      <MemoryRouter initialEntries={["/recipes/1"]}>
        <Homepage />
      </MemoryRouter>
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
