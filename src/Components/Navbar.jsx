import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/circle-logo-png.webp";
import { Button } from "antd";
import LoginPage from "../Pages/LoginPage";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.persistedReducer.login);
  console.log(user);
  return (
    <div className="navigation-container">
      <div className="left">
        <Link to="">
          <img className="logo" src={Logo} alt="" />
        </Link>
      </div>

      <div className="right">
        {user?.email ? (
          <h4 style={{ color: "lightlatesgrey" }}>{user.email}</h4>
        ) : (
          <LoginPage />
        )}
        <Link to="basket">
          <Button>Go To Basket</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
