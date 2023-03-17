import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { registerData } from "../Slices/RegisterSlice";

const Register = () => {
  const dispatch = useDispatch();
  const userName = useRef();
  const email = useRef();
  const password = useRef();
  const submitPassword = useRef();
  const error = useSelector((state) => state.persistedReducer.register.error);
  console.log(error);
  const navigate = useNavigate();

  return (
    <div className="MainLogin">
      <div className="loginForm register">
        <div className="inputs">
          <input
            ref={userName}
            type="text"
            placeholder="Fullname"
            className="input"
          />
          <input
            className="input"
            type="email"
            placeholder="Email"
            ref={email}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            ref={password}
          />
          <input
            className="input"
            type="password"
            placeholder="Password Submit"
            ref={submitPassword}
          />
        </div>
        <div className="SignIn">
          <Button
            onClick={() => {
              dispatch(
                registerData({
                  name: userName.current.value,
                  email: email.current.value,
                  password: password.current.value,
                })
              );
              setTimeout(() => {
                if (error.length > 0) {
                } else {
                  navigate("/loginside");
                }
              }, 3000);
            }}
          >
            Sign Up
          </Button>
          <p>- or -</p>
          <Button>Sign In</Button>
        </div>
        <div className="icons">
          <Link to="google.com">
            <GoogleIcon />
          </Link>
          <Link to="github.com/elsad159">
            <GitHubIcon />
          </Link>
          <Link to="facebook.com">
            <FacebookIcon />
          </Link>
          <Link to="linkedin.com">
            <LinkedInIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
