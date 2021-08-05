import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import "../../css/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import people from "../../img/people.jpg";

const data = {
  art1: {
    header: "A New Wave Of Peaceful Protest Has Just Started At The Capital",
    author: "Jack Sparrow",
    date: "07-22-2021",
    img: "./img/people.jpg"
  },
  art2: {
    header: "A New Wave Of Peaceful Protest Has Just Started At The Capital",
    author: "Jack Sparrow",
    date: "07-22-2021",
    img: "../img/people.jpg"
  },
  art3: {
    header: "A New Wave Of Peaceful ",
    author: "Jack Sparrow",
    date: "07-22-2021",
    img: { people }
  }
};

const Header = () => {
  return (
    <div>
      <Container id="header" className="header" fluid>
        <div className="overlay">
          <Row>
            <Container id="category-nav" className="line transparent" fluid>
              <Navbar className="">
                <Nav className="">
                  <Nav.Link className="nav-2-item" href="#">
                    World
                  </Nav.Link>
                  <Nav.Link className="nav-2-item" href="#">
                    Politics
                  </Nav.Link>
                  <Nav.Link className="nav-2-item" href="#">
                    Health
                  </Nav.Link>
                  <Nav.Link className="nav-2-item" href="#">
                    Business
                  </Nav.Link>
                  <Nav.Link className="nav-2-item" href="#">
                    Tech
                  </Nav.Link>
                  <Nav.Link className="nav-2-item" href="#">
                    Environment
                  </Nav.Link>
                  <Nav.Link className="nav-2-item" href="#">
                    Sports
                  </Nav.Link>
                </Nav>
              </Navbar>
            </Container>
          </Row>
          <Row id="headline">
            <Col lg={7} md={12} sm={12} id="headlineH1" className="col-center text-left">
              <h1>{data.art1.header}</h1>

              <p sm={6} className="date">
                {data.art1.date}
              </p>
              <p sm={6} className="author lead">
                {data.art1.author}
              </p>
            </Col>
            
            <Col lg={4} md={12} sm={12} id="header-scroll" className="col-center scrollbar-red">
            <div className="scroll-div">
              <h1>{data.art1.header}</h1>

              <p sm={6} className="date">
                {data.art1.date}
              </p>
              <p sm={6} className="author lead">
                {data.art1.author}
              </p>
              <hr />

              <h1>{data.art1.header}</h1>

              <p sm={6} className="date">
                {data.art1.date}
              </p>
              <p sm={6} className="author lead">
                {data.art1.author}
              </p>
              <hr />

              <h1>{data.art1.header}</h1>

              <p sm={6} className="date">
                {data.art1.date}
              </p>
              <p sm={6} className="author lead">
                {data.art1.author}
              </p>
              </div>
            </Col>
          </Row>

            <div id="breakingCon">
<Row className="breakingHead">
                <h5 className="h5 text-center">Breaking News</h5>

</Row>
          <Row id="breakingSec">
              <Col md={12} >
                <Row className="breakingNewsItem">
                  <Col>
                    <img src={people} alt="people" />
                  </Col>
                  <Col className="breakCopy">
                    <h6>{data.art3.header}</h6>
                    <p>{data.art3.author}</p>
                  </Col>
                  <Col>
                    <img src={people} alt="people" />
                  </Col>
                  <Col className="breakCopy">
                    <h6>{data.art3.header}</h6>
                    <p>{data.art3.author}</p>
                  </Col>
                  <Col className="last-col">
                    <img src={people} alt="people" />
                  </Col>
                  <Col className="breakCopy last-col">
                    <h6>{data.art3.header}</h6>
                    <p>{data.art3.author}</p>
                  </Col>
                </Row>
                
              </Col>
              <Col md={4}></Col>
          </Row>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
