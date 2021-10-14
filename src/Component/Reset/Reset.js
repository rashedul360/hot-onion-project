import React, { useState } from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import "./reset.css";
const Reset = () => {
  const { error, reset } = useAuth();
  const [email, setEmail] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleForm = (e) => {
    e.preventDefault();
  };
  const sendResetMail = () => {
    reset(email);
  };

  return (
    <div>
      <h1>reset your password</h1>
      <form className="form-design" action="" onSubmit={handleForm}>
        <InputGroup className="mb-3 w-50 mx-auto">
          <FormControl
            onBlur={handleEmail}
            placeholder="email address"
            type="email"
            required
          />
          <input
            onClick={sendResetMail}
            type="submit"
            className="btn btn-danger"
          />
        </InputGroup>
        <p>{error}</p>
      </form>
    </div>
  );
};

export default Reset;
