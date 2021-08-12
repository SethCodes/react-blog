import React, { useEffect, useState } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import "../../css/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import people from "../../img/people.jpg";
// import { posts } from "../../posts.js";
import Article from "./Article";
import axios from "axios";
import {Link, withRouter} from 'react-router-dom';
import About from '../About';




const Header = () => {
  const url = `http://newsapi.org/v2/everything?q=ai&apiKey=41d85d23b2f640b0892f12ae01b9a373`;
  // const url = `http://newsapi.org/v2/everything?q=ai&apiKey=${APIKEY}`;

  const [result, setResult] = useState(null);
  const [bgImage, setBgImg] = useState(null);
  const [featImg, setFeatImg] = useState({people});


  

  useEffect(() => {
    axios.get(url).then((response) => {
      setResult(response.data.articles);
      setBgImg(response.data.articles[0].urlToImage);
      setFeatImg(response.data.articles[14].urlToImage);
      console.log(response.data.articles);
      
    })
    
      console.log(result);
      

  }, []);

//   const mainTitle = result.length ? (<div>
//   <Link to={'/' + result.id}>
//     <h1>{!result ? "Loading" : result[0].title}</h1>
// </Link>
// <p sm={6} className="date">
//   {!result ? "loading" : result[0].publishedAt}
// </p>
// <p sm={6} className="author lead">
//   {!result ? "loading" : result[0].author}
// </p>
//   </div>):(console.log());


  return (
    <div>
      <Container
        id="header"
        style={{ backgroundImage: "url(" + bgImage + ")" }}
        className="header"
        fluid
      >
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
            <Col
              lg={7}
              md={12}
              sm={12}
              id="headlineH1"
              className="col-center text-left"
            >
            {/* {mainTitle} */}
              <h1>{!result ? "Loading" : result[0].title}</h1>

              <p sm={6} className="date">
                {!result ? "loading" : result[0].publishedAt}
              </p>
              <p sm={6} className="author lead">
                {!result ? "loading" : result[0].author}
              </p>
              <a href="/about">About</a>
            </Col>

            <Col
              lg={4}
              md={12}
              sm={12}
              id="header-scroll"
              className="col-center scrollbar-red"
            >
              <div className="scroll-div">
                {!result
                  ? "loading"
                  : result.slice(3, 7).map((article, key) => {
                      return (
                        <div key={key}>
                        {/* <BrowserRouter> */}
                        <Link to={'/' + article.title}>
                        {/* <a href={article.url} target="_blank" rel="noreferrer"> */}
                          <h1>{article.title}</h1>

                          <p sm={6} className="date">
                            {article.publishedAt}
                          </p>
                          <p sm={6} className="author lead">
                            {article.author}
                          </p>
                          </Link>
                          {/* </a> */}
                          <hr />
                          {/* </BrowserRouter> */}
                        </div>
                      );
                    })}
              </div>
            </Col>
          </Row>

          <div id="breakingCon">
            <Row className="breakingHead">
              <h5 className="h5 text-center">Breaking News</h5>
            </Row>
            <Row id="breakingSec">
              <Col md={12}>
                <Row className="breakingNewsItem">
                  <Col>
                    <img
                      src={!result ? "loading" : result[1].urlToImage}
                      alt="people"
                    />
                  </Col>
                  <Col className="breakCopy">
                    <h6>{!result ? "loading" : result[1].title}</h6>
                    <p>{!result ? "loading" : result[1].author}</p>
                  </Col>

                  <Col>
                    <img
                      src={!result ? "loading" : result[2].urlToImage}
                      alt="people"
                    />
                  </Col>
                  <Col className="breakCopy">
                    <h6>{!result ? "loading" : result[2].title}</h6>
                    <p>{!result ? "loading" : result[2].author}</p>
                  </Col>
                </Row>
              </Col>
              <Col md={4}></Col>
            </Row>
          </div>
        </div>
      </Container>

      {/* FEATURES SECTION */}
      <Container id="features" fluid>
        <Row>
          <Col className=" text-start feature-left" lg={3} md={0} sm={0}>
            {!result ? "Loading" : result.slice(7, 10).map((article) => {
              return (
                <Row>
                  <Article
                    header={article.title}
                    date={article.publishedAt}
                    author={article.author}
                  />
                </Row>
              );
            })}
          </Col>

          <Col className="imgCon" md={6} sm={12} style={{ backgroundImage: "url(" + featImg + ")" }}>
            <div className="featureImgOverlay">
          <Row className="featCopy">
            {/* <Col className=""> */}
          <h1 >{!result ? "Loading" : result[14].title}</h1>
          
<Col>

          <p className="date">{!result ? "Loading" : result[14].publishedAt}</p>
</Col>
<Col>
          <p className="author lead">{!result ? "Loading" : result[14].author}</p>

</Col>
          
          {/* </Col> */}
          </Row>
            </div>
          </Col>

          <Col className="feature-right" md={3} sm={12}>
            {!result ? "Loading" : result.slice(10, 14).map((article) => {
              return (
                <Row className="featRRow">
                  <Col>
                    <img
                      className="rColImg"
                      src={article.urlToImage}
                      alt="people"
                    />
                  </Col>
                  <Col>
                    <h6>{article.title}</h6>
                    <p className=" imgAuthor lead">{article.author}</p>
                  </Col>
                </Row>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header
