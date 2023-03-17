import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="logreg">
      <Link to="loginside">Login</Link>
      <Link to="registerside">Register</Link>
    </div>
  );
};

export default LoginPage;
