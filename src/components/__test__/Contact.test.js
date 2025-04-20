import { render, screen } from "@testing-library/react";
import ContactUs from "../Contact";
import "@testing-library/jest-dom";

test("Load Contact Page", () => {
  render(<ContactUs />);
  const heading  = screen.getByRole("heading");

  //Assertion
  expect(heading).toBeInTheDocument();
  
});

