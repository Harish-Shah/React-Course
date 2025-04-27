import { render, screen } from "@testing-library/react";
import ContactUs from "../Contact";
import "@testing-library/jest-dom";

describe("ContactUs Component Test Cases",() => {
  
  test("Load Contact Page", () => {
    render(<ContactUs />);
    const heading  = screen.getByRole("heading");
  
    //Assertion
    expect(heading).toBeInTheDocument();
    
  });
  
  test("Should load 2 input fields", () => {
    //render
    render(<ContactUs />);
  
    //query
    const inputFields = screen.getAllByRole("textbox");
  
    //Assertion
    expect(inputFields.length).not.toBe(3);
  });
})



