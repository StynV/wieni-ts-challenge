import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Navbar } from ".";
import "../../store/i18nTests";

jest.mock("react-responsive", () => ({
  useMediaQuery: jest.fn(),
}));

jest.mock("components/darkmodeswitch/DarkModeSwitch", () => ({
  __esModule: true,
  DarkModeSwitch: () => <div data-testid="mock-DarkModeSwitch" />,
}));

jest.mock("components/languageswitch/LanguageSwitch", () => ({
  __esModule: true,
  LanguageSwitch: () => <div data-testid="mock-LanguageSwitch" />,
}));

describe("Navbar", () => {
  it("renders a Navbar on desktop", () => {
    (useMediaQuery as jest.Mock).mockImplementation(() => false);

    const { container } = render(
      <Router>
        <Navbar />
      </Router>
    );

    expect(container).toMatchSnapshot();

    expect(screen.getByTestId("navbar--element")).toBeVisible();

    expect(screen.getByText("Navbar.Logo")).toBeVisible();
    expect(screen.getByText("Navbar.Home")).toBeVisible();
    expect(screen.getByText("Navbar.Recipes")).toBeVisible();
  });

  it("renders a Navbar on mobile without children", () => {
    (useMediaQuery as jest.Mock).mockImplementation(() => true);

    const { container } = render(
      <Router>
        <Navbar />
      </Router>
    );

    expect(container).toMatchSnapshot();

    expect(screen.getByTestId("navbar--element")).toBeVisible();

    expect(screen.getByText("Navbar.Logo")).toBeVisible();
    expect(screen.queryByRole("link", { name: "Navbar.Home" })).toBeNull();
    expect(screen.queryByRole("link", { name: "Navbar.Recipes" })).toBeNull();
  });

  it("renders a Navbar on mobile with children", () => {
    (useMediaQuery as jest.Mock).mockImplementation(() => true);

    const { container } = render(
      <Router>
        <Navbar />
      </Router>
    );

    const button = screen.getByTestId("mobile-menu");
    fireEvent.click(button);

    expect(container).toMatchSnapshot();

    expect(screen.getByTestId("navbar--element")).toBeVisible();

    expect(screen.getByText("Navbar.Logo")).toBeVisible();
    expect(screen.getByText("Navbar.Home")).toBeVisible();
    expect(screen.getByText("Navbar.Recipes")).toBeVisible();
  });
});
