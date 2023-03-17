import React, { useRef } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../Slices/LoginSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const checkUsers = useSelector(
    (state) => state.persistedReducer.register.registerUsers
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="MainLogin">
      <div className="loginForm">
        <div className="inputs">
          <input
            className="input"
            type="email"
            placeholder="Email"
            ref={emailRef}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />
        </div>
        <div className="SignIn">
          <Button
            onClick={() => {
              const checkUser = checkUsers.find(
                (user) =>
                  user.email == emailRef.current.value &&
                  user.password == passwordRef.current.value
              );
              if (checkUser) {
                dispatch(
                  userData({
                    email: emailRef.current.value,
                    password: passwordRef.current.value,
                  })
                  );
                  navigate("/") 
              } else {
                alert("User Is Not Found");
              }
            }}
          >
            Sign In
          </Button>
          <p>- or -</p>
          <Button>Sign Up</Button>
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

export default Login;
