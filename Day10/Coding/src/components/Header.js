import { useState } from "react";
import foodLogo from "../../assets/food-logo.png";
import { Link } from "react-router-dom";
import "../../index.css";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("header rendered");
  return (
    <div className="flex justify-between border border-solid shadow-xl">
      <div className="ml-6 p-3">
        <img className="w-16" src={foodLogo}></img>
      </div>
      <div>
        <ul className="flex p-4 mr-6 text-center">
          <li className="p-2.5 m-2.5">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2.5 m-2.5">
            <Link to="about">About</Link>
          </li>
          <li className="p-2.5 m-2.5">
            <Link to="contact">Contact</Link>
          </li>{" "}
          <li className="p-2.5 m-2.5">Cart</li>
          <li className="p-2.5 m-2.5">
            <button
              className="login"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
