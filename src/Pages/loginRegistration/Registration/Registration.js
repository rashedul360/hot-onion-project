import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import registrationImage from "../../../images/register.svg";
const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { googleSignIn, registration, error, updateInformation } = useAuth();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleSUbmit = (e) => {
    e.preventDefault();
    registration(name, email, password);
    updateInformation(name);
  };
  return (
    <div>
      <div className="row registration mt-5 container justify-content-center align-items-center">
        <div class="form-container col-md-6">
          <form action="" onSubmit={handleSUbmit}>
            <input
              onBlur={handleName}
              type="text"
              name="name"
              required
              placeholder="your name"
            />
            <br />
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
            <input type="submit" value="Registration" />
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
            <p>{error}</p>
          </form>
        </div>
        <div className="col-md-6">
          <img
            className="img-fluid w-100 p-5 mx-5"
            src={registrationImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Registration;
