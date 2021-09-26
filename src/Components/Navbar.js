import React, { useState, useEffect } from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/navbar.css";
import logo from "../img/Icon.png";
import axios from "axios";

const NavBar = () => {

  return (
    <Container id="navbar" fluid className="transparent fixed-top">
      <Row>
        <div
          variant="light"
          bg="transparent"
          className=" navbar navbar-expand navbar-lightnavbar-inner"
        >
        

          <Col className="text-center nav-logo">
            <Navbar.Brand id="nav-name" href="#home">
              <img
                alt="logo"
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              React, Redux News Aggregator
            </Navbar.Brand>
          </Col>

          
        </div>
      </Row>
    </Container>
  );
};

export default NavBar;
