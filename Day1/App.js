import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (
  <h1 id="heading" className="title">
    Namaste React
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);
root.render(heading);
