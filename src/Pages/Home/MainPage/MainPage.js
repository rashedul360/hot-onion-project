import React from "react";
import { Nav } from "react-bootstrap";
import Choose from "../Choose/Choose";
import Food from "../Food/Food";
import Foods from "../Foods/Foods";

import IntroSection from "../IntroSection/IntroSection";

const MainPage = () => {
  return (
    <div>
      <IntroSection />
      <div className="my-5">
        {" "}
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link>BreakFast</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Dinner</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Lunch</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <Foods />
      <Choose></Choose>
    </div>
  );
};

export default MainPage;
