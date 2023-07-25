import { useState } from "react";
import foodLogo from "../../assets/food-logo.png";
import { Link } from "react-router-dom";
import "../../App.css";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("header rendered");
  return (
    <div className="header">
      <div className="logoComponent">
        <img className="logo" src={foodLogo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>{" "}
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
