import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Provider } from "react-redux";
import store from "store/store";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { Navbar } from ".";

jest.mock("react-responsive", () => ({
  useMediaQuery: jest.fn(),
}));

describe("Navbar", () => {
  it("renders a Navbar on desktop", () => {
    (useMediaQuery as jest.Mock).mockImplementation(() => false);

    const { container } = render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Router>
            <Navbar />
          </Router>
        </I18nextProvider>
      </Provider>
    );

    expect(container).toMatchSnapshot();

    expect(screen.getByTestId("navbar--element")).toBeVisible();

    expect(screen.getByRole("link", { name: "Wieni" })).toBeVisible();
    expect(screen.queryByRole("link", { name: "Home" })).toBeVisible();
    expect(screen.queryByRole("link", { name: "Recipes" })).toBeVisible();
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

    expect(screen.getByRole("link", { name: "Wieni" })).toBeVisible();
    expect(screen.queryByRole("link", { name: "Home" })).toBeNull();
    expect(screen.queryByRole("link", { name: "Recipes" })).toBeNull();
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

    expect(screen.getByRole("link", { name: "Wieni" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Home" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Recipes" })).toBeVisible();
  });
});
