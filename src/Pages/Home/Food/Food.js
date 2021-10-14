import React from "react";
import { Card, Col } from "react-bootstrap";
import "./food.css";
const Food = (props) => {
  const { name, price, disc, img } = props.food;

  return (
    <div className="col-md-4">
      <div>
        <Col>
          <Card
            className="food-card"
            style={{ borderRadius: "3rem", border: "none", margin: "20px" }}
          >
            <div>
              <Card.Img className="mt-2 text-center" variant="top" src={img} />
            </div>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{disc}</Card.Text>
              <h4>${price}</h4>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </div>
  );
};

export default Food;
