import React, { useEffect, useState } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import "../../css/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import people from "../../img/people.jpg";
// import { posts } from "../../posts.js";
import Article from "./Article";
import axios from "axios";
import {useSelector, useDispatch} from 'react-redux';
import {updateUrl} from '../../actions';
import {BrowserRouter as Router, Link, BrowserRouter} from 'react-router-dom';



const Header = () => {

  //redux 
  const stateUrl = useSelector(state => state.url)
  const dispatch = useDispatch();

  
  const [result, setResult] = useState(null);
  const [bgImage, setBgImg] = useState(null);
  const [featImg, setFeatImg] = useState({ people });
  const [category, setCategory] = useState('ai');
  const newUrl = `http://newsapi.org/v2/everything?q=${category}&apiKey=41d85d23b2f640b0892f12ae01b9a373`;
  // const url = `http://newsapi.org/v2/everything?q=ai&apiKey=${APIKEY}`;

  const categoryClicked = (e) => {
    
    setCategory(e.target.innerHTML);

  }

  console.log(" current state is: " + stateUrl);


  useEffect(() => {
    axios.get(stateUrl).then((response) => {
      setResult(response.data.articles);
      setBgImg(response.data.articles[0].urlToImage);
      setFeatImg(response.data.articles[14].urlToImage);
      

    }).then(() => dispatch(updateUrl(newUrl)));
    console.log('changed state url: '+ stateUrl);

  }, [category, stateUrl]);


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
                  <Nav.Link onClick={categoryClicked} className="nav-2-item text-white" href="#">
                    World
                  </Nav.Link>
                  <Nav.Link onClick={categoryClicked} className="nav-2-item text-white" href="#">
                    Politics
                  </Nav.Link>
                  <Nav.Link onClick={categoryClicked} className="nav-2-item text-white" href="#">
                    Health
                  </Nav.Link>
                  <Nav.Link onClick={categoryClicked} className="nav-2-item text-white" href="#">
                    Business
                  </Nav.Link>
                  <Nav.Link onClick={categoryClicked} className="nav-2-item text-white" href="#">
                    Tech
                  </Nav.Link>
                  <Nav.Link onClick={categoryClicked} className="nav-2-item text-white" href="#">
                    Environment
                  </Nav.Link>
                  <Nav.Link onClick={categoryClicked} className="nav-2-item text-white" href="#">
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

              <h1>
                {!result ? (
                  "Loading"
                ) : (
                  <a href={"/" + result[0].title}>{result[0].title}</a>
                )}
              </h1>
              <p sm={6} className="date">
                {!result ? "loading" : result[0].publishedAt}
              </p>
              <p sm={6} className="author lead">
                {!result ? "loading" : result[0].author}
              </p>
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
                  : result.slice(3, 7).map((article, index) => {
                      return (
                        <div key={index}>
                        <BrowserRouter>
                          <Link to={"/react-blog/" + article.title}>
                            <h1>{article.title}</h1>
                            <p sm={6} className="date">
                              {article.publishedAt}
                            </p>
                            <p sm={6} className="author lead">
                              {article.author}
                            </p>
                          </Link>
                          </BrowserRouter>
                          <hr />
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
                {!result ? (
                  "Loading..."
                ) : (
                  <Row className="breakingNewsItem">
                    <Col>
                      <img src={result[1].urlToImage} alt="people" />
                    </Col>
                    <Col className="breakCopy">
                      <a href={"/" + result[1].title}>
                        <h6>{result[1].title}</h6>
                      </a>
                      <p>{result[1].author}</p>
                    </Col>

                    <Col>
                      <img src={result[0].urlToImage} alt="people" />
                    </Col>
                    <Col className="breakCopy">
                      <a href={"/" + result[2].title}>
                        <h6>{result[2].title}</h6>
                      </a>
                      <p>{result[2].author}</p>
                    </Col>
                  </Row>
                )}
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
            {!result
              ? "Loading"
              : result.slice(7, 10).map((article) => {
                  return (
                    <Row>
                      <Article
                        link={article.title}
                        header={article.title}
                        date={article.publishedAt}
                        author={article.author}
                      />
                    </Row>
                  );
                })}
          </Col>

          <Col
            className="imgCon"
            md={6}
            sm={12}
            style={{ backgroundImage: "url(" + featImg + ")" }}
          >
            <div className="featureImgOverlay">
              <Row className="featCopy">
                {/* <Col className=""> */}
                {!result ? (
                  "Loading"
                ) : (
                  <a href={"/" + result[14].title}>
                    <h1>{result[14].title}</h1>
                  </a>
                )}

                <Col>
                  <p className="date">
                    {!result ? "Loading" : result[14].publishedAt}
                  </p>
                </Col>
                <Col>
                  <p className="author lead">
                    {!result ? "Loading" : result[14].author}
                  </p>
                </Col>

                {/* </Col> */}
              </Row>
            </div>
          </Col>

          <Col className="feature-right" md={3} sm={12}>
            <Row className="featRRow">
              {!result
                ? "Loading"
                : result.slice(10, 14).map((article) => {
                    return (
                      <div className="featRRow">
                        <Col>
                          <img
                            className="rColImg"
                            src={article.urlToImage}
                            alt="people"
                          />
                        </Col>
                        <Col>
                          <a href={"/" + article.title}>
                            <h6>{article.title}</h6>
                          </a>
                          <p className=" imgAuthor lead">{article.author}</p>
                        </Col>
                      </div>
                    );
                  })}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
