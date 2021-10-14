import React from "react";
import img from "../../../images/register.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="bg-dark mt-5 p-2 text-white">
        <div className="row align-items-center">
          <div className="col-md-3">
            <img
              style={{ width: "200px" }}
              src="https://github.com/ProgrammingHero1/hot-onion-restaurent/blob/master/logo2.png?raw=true{img}"
              alt=""
            />
          </div>
          <div className="col-md-3">
            <ul>
              <li>
                <p href="">item number1</p>
              </li>
              <li>
                <p href="">item number2</p>
              </li>
              <li>
                <p href="">item number3</p>
              </li>
              <li>
                <p href="">item number4</p>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>About</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium architecto, soluta veritatis recusandae error culpa
              suscipit debitis deleniti ad? Quo ullam minus cum porro nihil
              sapiente blanditiis qui laudantium reiciendis.
            </p>
          </div>
          <div className="col-md-3 social-links">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-google"></i>
            <i class="fab fa-google-play"></i>
            <br />
            <i class="fab fa-youtube"></i>
            <i class="fab fa-instagram-square"></i>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
