import { useState } from "react";
import foodLogo from "../assets/food-logo.png";

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
          <li>Home</li> <li>About</li> <li>Contact</li> <li>Cart</li>
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
