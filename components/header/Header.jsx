import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [stateBtnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <img
        className="logo"
        src="https://marketplace.canva.com/EAFszdYJfvM/1/0/1600w/canva-brown-simple-icon-food-logo-2M8uaWgGUPg.jpg"
      />

      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"contactus"}>Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="loginBtn"
            onClick={() => {
              stateBtnName === "Login"
                ? setBtnName("Logout")
                : setBtnName("Login");
            }}
          >
            {stateBtnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
