import React, { useState } from "react";
import { useHistory } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import "./login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { googleSignIn, login, error } = useAuth();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSUbmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    login(email, password);
  };
  const history = useHistory();
  const handleReset = () => {
    history.push("/reset");
  };

  return (
    <div>
      <div className="login-container mt-5">
        <div class="form-container">
          <form action="" onSubmit={handleSUbmit}>
            <input
              type="email"
              name="email"
              onBlur={handleEmail}
              placeholder="your email"
              required
            />
            <br />
            <input
              onBlur={handlePassword}
              type="password"
              name="password"
              placeholder="your password"
              required
            />
            <br />
            <input type="submit" value="login" />
            <p>or</p>
            <button className="btn btn-warning" onClick={googleSignIn}>
              <i class="fab fa-google"></i> {"  "}
              google sign in
            </button>
            {"  "}
            <button className="btn btn-warning">
              <i class="fab fa-facebook"></i> {"  "}
              facebook
            </button>
            <br />
            <button className="btn btn-danger mt-3" onClick={handleReset}>
              Reset
            </button>
            <p>{error}</p>
          </form>
        </div>
        <div>
          <img
            className="img-fluid"
            src="https://assignment-9-edu-tech.netlify.app/static/media/login.0d545116.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
