import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
// import About from "./components/About";
import ContactUs from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

/*
Header - Logo,Nav Items
Body - Searchbar,RestaurantContainer,RestaurantCard
Footer- About,Links,Address,Contact
*/

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading Screen</h1>}>
            <About />{" "}
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading Screen</h1>}>
            {" "}
            <Grocery />{" "}
          </Suspense>
        ),
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
