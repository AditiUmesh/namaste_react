import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement("h1",{},"hello world");
// console.log(heading)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const parent = React.createElement("div",{id: "parent"},React.createElement("div",{id: "child"},React.createElement("h1",{},"Namaste React")));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

const Title = () => <h1 className="heading">Namaste React</h1>;

// const HeadingComponent = () =>{
//     return <h1>Namaste React from component</h1>
// }

const HeadingComponent = () => (
  <div>
    <Title />
    <h2>Namste React inside component composition</h2>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
