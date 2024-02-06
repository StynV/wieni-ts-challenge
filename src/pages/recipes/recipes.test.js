import { render, screen, waitFor } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import fetchRecipes from "api/fetchRecipes";
import Homepage from "./index";
import mockData from "../../mocks/data/testRecipes.json";
import "../../store/i18nTests.ts";

jest.mock("api/fetchRecipes", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Recipes page", () => {
  it("renders recipes page", async () => {
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
        screen.getByRole("heading", { name: "Card.Ingredients", level: 3 })
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
        screen.getByRole("heading", { name: "Card.Preparation", level: 3 })
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
          name: "Fetch.Error",
          level: 1,
        })
      ).toBeVisible();
    });
  });
});
