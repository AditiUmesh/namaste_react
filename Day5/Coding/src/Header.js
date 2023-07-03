import foodLogo from "../assets/food-logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoComponent">
        <img className="logo" src={foodLogo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li> <li>About</li> <li>Contact</li> <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
