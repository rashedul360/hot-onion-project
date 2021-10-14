import React from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import "./introSection.css";
const IntroSection = () => {
  const { user } = useAuth();
  return (
    <div className="intro-Container">
      <div className="container">
        <h1>Best food waiting for your belly</h1>
        <InputGroup className="mb-3 w-50 mx-auto">
          <FormControl placeholder="search your meal" />
          <Button variant="btn btn-warning" id="button-addon2">
            search
          </Button>
        </InputGroup>
        {user.email && (
          <h4>
            welcome {user.displayName}{" "}
            <span>
              <img style={{ borderRadius: "50%" }} src={user.photoURL} alt="" />
            </span>{" "}
          </h4>
        )}
      </div>
    </div>
  );
};

export default IntroSection;
