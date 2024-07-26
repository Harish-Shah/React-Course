import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Body from "./components/body/Body";

/*
Header - Logo,Nav Items
Body - Searchbar,RestaurantContainer,RestaurantCard
Footer- About,Links,Address,Contact
*/

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

root.render(<AppLayout />);
