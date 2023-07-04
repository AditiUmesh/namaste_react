import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./src/Header";
import Body from "./src/Body";

const FoodApp = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FoodApp />);
