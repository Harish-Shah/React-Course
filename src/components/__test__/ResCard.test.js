import { resCardMock } from "../mocks/resCardMock";
import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../body/RestaurantCard";
import "@testing-library/jest-dom";

it("Should render ResCard with mock data", () => {
  // Extract the `data` object from `resCardMock`
  render(<RestaurantCard {...resCardMock.data} />);

  // Query for the name
  const name = screen.getByText("Uncle Ji Restaurant");

  // Assertion
  expect(name).toBeInTheDocument();
});

it("Should render restaurant card component with promoted label", () => {
  const PromotedCard = withPromotedLabel(RestaurantCard);

  render(<PromotedCard {...resCardMock.data} />);

  const promotedLabel = screen.getByText("Promoted");

  expect(promotedLabel).toBeInTheDocument();
});