import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./food-logo.png";
import "./Assignment.css";
import userIcon from "./userIcon.png";
// Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
/*const Header = React.createElement("div", {className: "title"},
 React.createElement("h1",{},"iniside h1"), 
 React.createElement("h2",{},"iniside h2") , 
 React.createElement("h3",{},"iniside h3"));
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(Header);*/

// Create the same element using JSX
/*const heading = (<div className="title"> <h1>Inside H1</h1> <h2>Inside H2</h2> <h3>Inside H3</h3></div>)
const root = ReactDOM.createRoot(document.getElementById("root"));root.render(heading);*/

// Create a functional component of the same with JSX
/*const Heading = () => { 
    return ( 
        <div className="title"> <h1>Inside H1</h1> <h2>Inside H2</h2> <h3>Inside H3</h3> 
        </div> 
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);*/

// Pass attribute into the tag in JSX
const Heading = () => {
  return (
    <div className="title" style={{ backgroundColor: "teal" }}>
      <h1 style={{ textAlign: "center", color: "thistle" }}>Inside H1</h1>
      <h2 style={{ textAlign: "center", color: "bisque" }}>Inside H2</h2>
      <h3 style={{ textAlign: "center", color: "ivory" }}>Inside H3</h3>
    </div>
  );
};

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Heading/>);
// Composition of Component (Add a component inside another)
/*const Para = () => { 
    return ( 
        <div> 
            <Heading /> 
            <p> This is the Namaste React course </p> 
        </div> 
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Para/>);
*/
// {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

/*const titleComponent = (<h1 style = {{textAlign: 'center'}}>This is react element</h1>)

const TitleComponent = () => { return ( <h1 style = {{textAlign: 'center'}}> This is functional component</h1> )}
const Header = () => {
    return ( 
        <div className="title" style={{backgroundColor: 'teal'}}> 
        <h1 style={{textAlign: 'center' , color: 'thistle'}}>Inside Header</h1> 
        {titleComponent} <TitleComponent/> 
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);
*/

// Create a Header Component from scratch using Functional Component with JSX
// Add a Logo on left
// Add a search bar in middle
// Add user icon on right
// Add CSS to make it look nice
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="left">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="middle">
          <input key="search-bar" placeholder="Seach Bar"></input>
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </div>
        <div className="right">
          <img src={userIcon} alt="user_icon"></img>
        </div>
      </header>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
