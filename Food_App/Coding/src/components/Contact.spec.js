import { render, screen } from "@testing-library/react";
import Contact from "./Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test cases", () => {
  test("Should load Contact Component", () => {
    render(<Contact />);

    const heading = screen.getByText("Contact Us");

    expect(heading).toBeInTheDocument();
  });

  test("Should load Button in the Contact Component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should load input Name in the Contact Component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");

    expect(inputName).toBeInTheDocument();
  });

  test("Should load input email in the Contact Component", () => {
    render(<Contact />);

    const inputEmail = screen.getByPlaceholderText("Email");

    expect(inputEmail).toBeInTheDocument();
  });

  test("Should load textarea in the Contact Component", () => {
    render(<Contact />);

    const textArea = screen.getByTestId("textbox");

    expect(textArea).toBeInTheDocument();
  });

  test("Should load 3 input boxes on Contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(3);
  });
});
