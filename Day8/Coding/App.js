import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
  Outlet,
} from "react-router-dom";
import AboutUs from "./src/components/AboutUs";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";

const FoodApp = () => {
  return (
    <div className="app">
      <Header />
      {/**  */}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <FoodApp />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
