import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "Hello React");
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Namaste react"),
    React.createElement("h2", {}, "Hello h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello h1 tag"),
    React.createElement("h2", {}, "Hello h2 tag"),
  ]),
]);

console.log(parent);
root.render(parent);
