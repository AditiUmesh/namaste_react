import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Login button on Header", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button");
  expect(loginButton).toBeInTheDocument();
});

it("Should load cart item on Header", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const cartItem = screen.getByTestId("svg-cart");
  expect(cartItem).toBeInTheDocument();
});
