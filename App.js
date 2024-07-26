import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(render)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "this is a heading"
);

// JSX - HTML like or XML-like syntax

const jsxHeading = (
  <h1 className="heading" tabIndex="1">
    Heading using JSX
  </h1>
);

console.log("heading", heading);
console.log("jsxHeading", jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
root.render(jsxHeading);

/*
Header - Logo,Nav Items
Body - Searchbar,RestaurantContainer,RestaurantCard
Footer- About,Links,Address,Contact
*/

const elem = <span>Nested Heading</span>;
const Heading = () => (
  <div>
    <h1>This is Heading inside React Component</h1>
    {elem}
  </div>
);

const Heading2 = () => {
  return (
    <h1>
      Heading2
      <Heading />
    </h1>
  );
};

root.render(Heading2()); // Another way of calling Functional Component
// root.render(<Heading2 />);
