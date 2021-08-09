import React from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/navbar.css";
import logo from "../img/Icon.png";

const NavBar = () => {
  return (
    <Container id="navbar" fluid className="transparent fixed-top">
      <Row>
        <Navbar variant="light" bg="transparent" className="navbar-inner">
          <Col lg={4} md={4} sm={4} className="left-links">
            <Nav className="me-auto">
              <Nav.Link href="#home">Homes</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Col>

          <Col lg={4} md={4} sm={4} className="text-center nav-logo">
            <Navbar.Brand id="nav-name" href="#home">
              <img
                alt="logo"
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              React Bootstrap
            </Navbar.Brand>
          </Col>

          <Col lg={4} md={4} sm={4} className="right-links">
            <Container fluid>
              <Nav className="me-auto justify-content-end">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Col>
        </Navbar>
      </Row>
    </Container>
  );
};

export default NavBar;
