import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Header.css";
import CategoryNav from "./CategoryNav";

const data = {
  art1: {
    header: "A New Wave Of PeaceFul Protest Has Just Started At The Capital",
    author: "Jack Sparrow",
    date: "07-22-2021"
  }
};

const Header = () => {
  return (
    <Container id="header" className="header" fluid>
    <CategoryNav />
    <Container>
        <Row id="headline">
          <Col md={7}>
            <h1>{data.art1.header}</h1>
            <Row>
              <Col sm={6}>{data.art1.date}</Col>
              <Col sm={6}>{}</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Header;
