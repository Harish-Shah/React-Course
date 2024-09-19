import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utills/useOnlineStatus";
import UserContext from "../../utills/userContext";

const Header = () => {
  const [stateBtnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const userData = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
      <img
        className="h-28 p-2"
        alt="logo"
        src="https://marketplace.canva.com/EAFszdYJfvM/1/0/1600w/canva-brown-simple-icon-food-logo-2M8uaWgGUPg.jpg"
      />

      <div className="">
        <ul className="flex py-10">
          <li className="px-2">Online Status:{onlineStatus ? "✅" : "❌"}</li>
          <li className="px-2">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-2">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-2">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-2">
            <Link to={"contactus"}>Contact Us</Link>
          </li>
          <li className="px-2">Cart</li>
          <li className="px-2">
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
          </li>
          <li className="px-2 font-semibold">{userData.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
