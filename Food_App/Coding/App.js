import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
  Outlet,
} from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Footer from "./src/components/Footer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Home from "./src/components/Home";

const FoodApp = () => {
  return (
    // <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
    // </Provider>
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
        path: "/home",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
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
