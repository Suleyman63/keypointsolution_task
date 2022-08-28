import React, { useRef, useState, useEffect } from "react";
import Movie from "./Movie";
import "../style/App.css";
import { Avatar } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const regex =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

function Login2() {
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");

  const handleSubmit = () => {
    if (
      emailRef.current.value === "abc@gmail.com" &&
      passwordRef.current.value === "123456"
    ) {
      localStorage.setItem("emailData", "abc@gmail.com");
      localStorage.setItem("passwordData", "123456");
    }
  };

  // ==============================

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    validateEmail();
  });

  const validateEmail = () => {
    console.log(regex.test(email), regex.test(password));
    console.log(email, password);
    if (regex.test(email) && password.length >= 6) {
      setMessage("Your email and password is valid!");
      setIsValid(true);
      console.log("SUCCESS");
    } else {
      setIsValid(false);
      setMessage("Please enter a valid email or password!");
    }
  };

  return (
    <div>
      {getEmail && getPassword ? (
        <Movie />
      ) : (
        <div className="form-div">
          <Avatar className="login-icon">
            <LockOutlinedIcon />
          </Avatar>
          <div className="login-header">
            <h4 className="mt-4 text-center text-light fw-bold bg-danger fs-3 p-1 rounded">
              LOGIN
            </h4>
          </div>
          <form className="m-4" onSubmit={handleSubmit}>
            <div className="text-center">
              <input
                id="ss"
                type="email"
                ref={emailRef}
                className="email-input mt-2"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
                required
                autoFocus
              />
            </div>
            <div className="text-center ">
              <input
                type="password"
                name="password"
                autoComplete="on"
                ref={passwordRef}
                className="password-input mt-3"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
                required
              />
            </div>
            <div className={`message ${isValid ? "success" : "error"}`}>
              {message}
            </div>
            <div className="text-center">
              <button
                className="btn btn-danger mt-2 w-50 fs-5 "
                disabled={!isValid}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
export default Login2;
