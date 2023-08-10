import { render, screen } from "@testing-library/react";
import RestaurantCard from "./RestaurantCard";
import MOCKRESCARD from "../../mock/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render restaurant card component with props", () => {
  render(<RestaurantCard restroData={MOCKRESCARD} />);

  const name = screen.getByText("The Rameshwaram Cafe");
  expect(name).toBeInTheDocument();
});
