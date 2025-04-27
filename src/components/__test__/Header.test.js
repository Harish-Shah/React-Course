import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../header/Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utills/appStore";
import { BrowserRouter } from "react-router-dom";

it("Load Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginBtn = screen.getByRole("button");
  expect(loginBtn).toBeInTheDocument();
});

it("Should Change Login btn to Logout on Click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", {name : "Login"});
  fireEvent.click(loginBtn);
  const logOutBtn = screen.getByRole('button',{name : "Logout"});
  expect(logOutBtn).toBeInTheDocument();
});
