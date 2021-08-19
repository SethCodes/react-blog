import React, { useEffect, useState } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import "../../css/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import people from "../../img/people.jpg";
// import { posts } from "../../posts.js";
import Article from "./Article";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateUrl, updateArticle } from "../../actions";
import { Link } from "react-router-dom";

const Header = () => {




  //redux
  const stateUrl = useSelector((state) => state.url);
  const stateArt = useSelector((state) => state.article);
  const dispatch = useDispatch();

  //state
  const [result, setResult] = useState(null);
  const [bgImage, setBgImg] = useState(null);
  const [featImg, setFeatImg] = useState({ people });
  const [category, setCategory] = useState("ai");

  //handle button category change
  const categoryClicked = (e) => {
    let newUrl = `https://gnews.io/api/v4/search?q=${e.target.innerHTML}&lang=en&token=${process.env.REACT_APP_GNEWS_KEY}`;
    setCategory(e.target.innerHTML);
    dispatch(updateUrl(newUrl));
  };

  //store redux articles
  const handleArtClick = (e) => {
    dispatch(updateArticle(result));
  };

  //on load and change to url in redux
  // useEffect(() => {
  //   const getArticles = async () => {
  //     const res = await axios.get(stateUrl);
  //     dispatch(updateArticle(res.data.articles));
  //     setResult(res.data.articles);
  //     setBgImg(res.data.articles[0].urlToImage);
  //     setFeatImg(res.data.articles[14].urlToImage);
  //   };
  //   getArticles();
  //   console.log("tried");

  // }, [stateUrl]);

  // const apiKey = process.env.REACT_APP_API_KEY;


useEffect(() => {
  const getArticles = async () => {
    const res = await axios.get(stateUrl);
    dispatch(updateArticle(res.data.articles));
    setResult(res.data.articles);
    setBgImg(res.data.articles[0].image);





  }
  getArticles();


}, [stateUrl]);

  return (
    <div>
      <Container
        id="header"
        style={{ backgroundImage: `url("${bgImage}")` }}
        className="header"
        fluid
      >
        <div className="overlay">
          <Row>
            <Container id="category-nav" className="line transparent" fluid>
              <div className="navbar navbar-expand navbar-light">
                <div className="nav">
                  <Link
                    onClick={categoryClicked}
                    className="nav-2-item text-white"
                    to="#"
                  >
                    World
                  </Link>
                  <Link
                    onClick={categoryClicked}
                    className="nav-2-item text-white"
                    to="#"
                  >
                    Politics
                  </Link>
                  <Link
                    onClick={categoryClicked}
                    className="nav-2-item text-white"
                    to="#"
                  >
                    Health
                  </Link>
                  <Link
                    onClick={categoryClicked}
                    className="nav-2-item text-white"
                    to="#"
                  >
                    Business
                  </Link>
                  <Link
                    onClick={categoryClicked}
                    className="nav-2-item text-white"
                    to="#"
                  >
                    Tech
                  </Link>
                  <Link
                    onClick={categoryClicked}
                    className="nav-2-item text-white"
                    to="#"
                  >
                    Environment
                  </Link>
                  <Link
                    onClick={categoryClicked}
                    className="nav-2-item text-white"
                    to="#"
                  >
                    Sports
                  </Link>
                  <h1>{}</h1>
                </div>
              </div>
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
                  <Link to={"/react-blog/" + result[0].title} onClick={handleArtClick}>
                    {result[0].title}
                  </Link>
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
                          <Link
                            to={"/react-blog/" + article.title}
                            onClick={handleArtClick}
                          >
                            <h1>{article.title}</h1>
                            <p sm={6} className="date">
                              {article.publishedAt}
                            </p>
                            <p sm={6} className="author lead">
                              {article.author}
                            </p>
                          </Link>
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
                      <img src={result[1].image} alt="people" />
                    </Col>
                    <Col className="breakCopy">
                      <Link to={"/react-blog/" + result[1].title} onClick={handleArtClick}>
                        <h6>{result[1].title}</h6>
                      </Link>
                      <p>{result[1].author}</p>
                    </Col>

                    <Col>
                      <img src={result[0].image} alt="people" />
                    </Col>
                    <Col className="breakCopy">
                      <Link to={"/react-blog/" + result[2].title} onClick={handleArtClick}>
                        <h6>{result[2].title}</h6>
                      </Link>
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
      {/* <Container id="features" fluid>
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
                        onClick={handleArtClick}
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
              <Row className="featCopy"> */}
                {/* <Col className=""> */}
                {/* {!result ? (
                  "Loading"
                ) : (
                  <Link to={"/react-blog/" + result[14].title} onClick={handleArtClick}>
                    <h1>{result[14].title}</h1>
                  </Link>
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
                </Col> */}

                {/* </Col> */}
              {/* </Row>
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
                          <Link to={"/react-blog/" + article.title}>
                            <h6>{article.title}</h6>
                          </Link>
                          <p className=" imgAuthor lead">{article.author}</p>
                        </Col>
                      </div>
                    );
                  })}
            </Row>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default Header;
