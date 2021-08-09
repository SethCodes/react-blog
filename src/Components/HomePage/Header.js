import React, {useEffect, useState} from "react";
import { Container, Row, Col, Navbar, Nav, Image } from "react-bootstrap";
import "../../css/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import people from "../../img/people.jpg";
import { posts } from "../../posts.js";
import Article from "./Article";
import axios from 'axios';
// import blogs from '../../newsAPI';


// data 1 - 3
// let data13 = posts.slice(0, 3);
//data 1 - 4
let data14 = posts.slice(0, 4);
//data 4-8
let data48 = posts.slice(3, 8);

//data 9-11
let data911 = posts.slice(8, 11);

//data 12 -15
let data1215 = posts.slice(11, 15);






// newsAPIKey = 41d85d23b2f640b0892f12ae01b9a373



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

  const url = `http://newsapi.org/v2/everything?q=ai&apiKey=41d85d23b2f640b0892f12ae01b9a373`;
  // const url = `http://newsapi.org/v2/everything?q=ai&apiKey=${APIKEY}`;

const [result, setResult] = useState(null);
const [fiveEight, setFiveEight] = useState([]);
const [eightEleven, setEightEleven] = useState([]);
const [twelveFifteen, setTwelveFifteen] = useState([]);












useEffect(() => {
  axios.get(url)
  .then((response) => {
    setResult(response.data);
    setFiveEight(response.data.articles.slice(5, 8));
    setEightEleven(response.data.articles.slice(8, 11));
    setTwelveFifteen(response.data.articles.slice(12,15));


    
  } );
// console.log(result.articles);


}, []);

;


  return (
    <div>
      <Container id="header" style={{backgroundImage: "url(" +result.articles[0].urlToImage + ")"}} className="header" fluid>
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
              <h1>{
                !result ? 'Loading' : 
                result.articles[0].title}</h1>

              <p sm={6} className="date">
                {!result ? 'loading' : result.articles[0].publishedAt}
              </p>
              <p sm={6} className="author lead">
                {!result ? 'loading' : result.articles[0].author}
              </p>
            </Col>

            <Col
              lg={4}
              md={12}
              sm={12}
              id="header-scroll"
              className="col-center scrollbar-red">
           


              <div className="scroll-div">
              {
              fiveEight.map((posts) =>{
                return(
                  <div key={Math.random()}>
                  <h1>{posts.title}</h1>

                <p sm={6} className="date">
                  {posts.publishedAt}
                </p>
                <p sm={6} className="author lead">
                  {posts.author}
                </p>
                <hr />
                </div>
                )
              })
            }
                
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
                    <img src={!result ? 'loading' : result.articles[1].urlToImage} alt="people" />
                  </Col>
                  <Col className="breakCopy">
                    <h6>{
                      !result ? 'loading':
                      result.articles[1].title}</h6>
                    <p>{!result ? 'loading' : result.articles[1].author}</p>
                  </Col>

                  <Col>
                    <img src={!result ? 'loading' : result.articles[2].urlToImage} alt="people" />
                  </Col>
                  <Col className="breakCopy">
                    <h6>{!result ? 'loading':
                      result.articles[2].title}</h6>
                    <p>{!result ? 'loading' : result.articles[1].author}</p>
                  </Col>
                  
                  {/* <Col className="last-col">
                    <img src={!result ? 'loading' : result.articles[3].urlToImage} alt="people" />
                  </Col>
                  <Col className="breakCopy last-col">
                    <h6>{posts[2].header}</h6>
                    <p>{posts[2].author}</p>
                  </Col> */}
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

            {eightEleven.map((article) => {
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

          <Col className="center-img-col" md={6} sm={12}>
            <Image className="featImg" src={people} alt="people" />
          </Col>

          <Col className="feature-right" md={3} sm={12}>

          {
            twelveFifteen.map((article) => {
              return(
              <Row className="featRRow">
              <Col>
                <img className="rColImg" src={article.urlToImage} alt="people" />
              </Col>
              <Col>
                <h6>{article.title}</h6>
                <p>{article.publishedAt}</p>
                <p>{article.author}</p>
              </Col>
            </Row>)
            })
          }
          </Col>
        </Row>
      </Container>
    </div>
  );
};


export default Header;
