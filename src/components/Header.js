import { LOGO_URL } from "../utills/constants";
import { useState } from "react";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo">
          <img src={LOGO_URL} alt="Namste Foods" />
        </div>
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() =>
              btnLogin === "Login"
                ? setBtnLogin("Logout")
                : setBtnLogin("Login")
            }
          >
            {btnLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
