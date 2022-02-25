import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function navbar({ setCartcount, cartsize }) {
  return (
    <>
      {" "}
      <Navbar bg="" variant="black">
        <Container>
          <Navbar.Brand
            href="/"
            onClick={() => setCartcount(true)}
            style={{ padding: "10px", fontSize: "24px" }}
          >
            Junaid
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" style={{ padding: "10px", fontSize: "24px" }}>
              Products
            </Link>
            <Link
              to="/CartDetails"
              style={{ padding: "10px" }}
              onClick={() => setCartcount(false)}
            >
              <i className="bi bi-cart-fill" style={{ fontSize: "24px" }}>
                <span> {cartsize}</span>
              </i>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
