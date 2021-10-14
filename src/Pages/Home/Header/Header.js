import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              style={{ width: "200px" }}
              src="https://github.com/ProgrammingHero1/hot-onion-restaurent/blob/master/logo2.png?raw=true"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                home
              </Nav.Link>
              <Nav.Link as={Link} to="/food">
                food
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="">
                <i class="fas fa-cart-plus"></i>
              </Nav.Link>
              {!user.email && (
                <>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/registration">
                    register
                  </Nav.Link>
                </>
              )}

              {user.email && (
                <span>
                  <img
                    style={{ width: "30px", borderRadius: "50%" }}
                    src={user.photoURL}
                    alt=""
                  />{" "}
                  <span>{user.displayName}</span>
                  {"  "}
                  <button onClick={logOut} className="btn btn-warning">
                    logout
                  </button>
                </span>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
