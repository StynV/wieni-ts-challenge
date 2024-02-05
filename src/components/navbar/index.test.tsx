import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from ".";

describe("Navbar", () => {
  it("renders a Navbar without children", () => {
    const { container } = render(
      <Router>
        <Navbar />
      </Router>
    );

    expect(container).toMatchSnapshot();

    expect(screen.getByTestId("navbar--element")).toBeVisible();

    expect(screen.getByRole("link", { name: "Wieni" })).toBeVisible();
    expect(screen.queryByRole("link", { name: "Home" })).toBeNull();
    expect(screen.queryByRole("link", { name: "Recipes" })).toBeNull();
  });

  it("renders a Navbar with children", () => {
    const { container } = render(
      <Router>
        <Navbar />
      </Router>
    );

    const button = screen.getByTestId("mobile-menu");
    fireEvent.click(button);

    expect(container).toMatchSnapshot();

    expect(screen.getByTestId("navbar--element")).toBeVisible();

    expect(screen.getByRole("link", { name: "Wieni" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Home" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Recipes" })).toBeVisible();
  });
});
