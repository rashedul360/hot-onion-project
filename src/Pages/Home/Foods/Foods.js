import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Food from "../Food/Food";

const Foods = () => {
  const [foods, setFood] = useState([]);
  useEffect(() => {
    fetch("foods.json")
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);
  return (
    <div>
      <Row xs={1} md={3} className="g-4 w-100 mx-auto">
        {foods.map((food) => (
          <Food key={food.id} food={food}></Food>
        ))}
      </Row>
    </div>
  );
};

export default Foods;
