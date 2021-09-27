import React, { useState, useEffect } from "react";
import "../css/Home.css";
import { useSelector, useDispatch } from "react-redux";
import { updateUrl, updateArticle } from "../actions";
import { Link } from "react-router-dom";
import { testPosts } from "../testPosts";
import axios from 'axios';


const Home = () => {
  //redux
  const stateUrl = useSelector((state) => state.url);
  const dispatch = useDispatch();

  //state
  const [result, setResult] = useState(null);
  const [bgImg, setBgImg] = useState(null);
  const [category, setCategory] = useState("");

  //handle button category change
  const categoryClicked = (e) => {
    let newUrl = `https://gnews.io/api/v4/search?q=${e.target.innerHTML}&lang=en&token=${process.env.REACT_APP_GNEWS_KEY}`;
    setCategory(e.target.innerHTML);
    //save for redux
    dispatch(updateUrl(newUrl));
  };

  //store redux articles
  const handleArtClick = (e) => {
    dispatch(updateArticle(result));
  };

  //prod comment out testPost setters
  //dev use test post setters
  useEffect(() => {
    const getArticles = async () => {
      const res = await axios.get(stateUrl);
      dispatch(updateArticle(res.data.articles));
    //   setResult(testPosts);
    //   setBgImg(testPosts[0].image);
      setResult(res.data.articles);
      setBgImg(res.data.articles[0].image);
    };
    getArticles();
  }, [stateUrl]);

  return (
    <div
      className="container-fluid home"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="header container-fluid">
        <div className="overlay">
          <div className="categories">
            <Link onClick={categoryClicked} className="category" to="#">
              World
            </Link>{" "}
            <Link onClick={categoryClicked} className="category" to="#">
              Politics
            </Link>
            <Link onClick={categoryClicked} className="category" to="#">
              Health
            </Link>
            <Link
              onClick={categoryClicked}
              className="category nav-item"
              to="#"
            >
              Business
            </Link>
            <Link
              onClick={categoryClicked}
              className="category nav-item"
              to="#"
            >
              Tech
            </Link>
            <Link
              onClick={categoryClicked}
              className="category nav-item"
              to="#"
            >
              Environment
            </Link>
            <Link
              onClick={categoryClicked}
              className="category nav-item"
              to="#"
            >
              Sports
            </Link>
          </div>

          <div className="headline">
            <div className="row">
              <div className="col-lg-6 col-sm-12 mainTitle">
                {!result ? (
                  "loading..."
                ) : (
                  <Link
                    to={"/react-blog/" + result[0].title}
                    onClick={handleArtClick}
                  >
                    <h1>{result[0].title}</h1>
                  </Link>
                )}
                {result ? (
                  <div className="auth-date">
                    <p>{result[0].source.name}</p>
                    <p>{result[0].publishedAt}</p>
                  </div>
                ) : (
                  "loading"
                )}
                <div className="breakingDiv">
                  <h4>BREAKING</h4>
                  <div className="row">
                    {!result
                      ? "Loading..."
                      : result.slice(1, 3).map((article) => {
                          return (
                            <div className="col-6">
                              <Breaking
                                image={article.image}
                                title={article.title}
                                onClick={handleArtClick}
                              />
                            </div>
                          );
                        })}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 scrollDiv">
                <div className="overflow-auto">
                    {!result ? "Loading..." : result.slice(3,7).map((article) => {
                        return(
                            <Link to={"/react-blog/" + article.title}>
                                <ArticleTitle 
                                    title={article.title}
                                    name={article.source.name}
                                    date={article.publishedAt}
                                    onClick={handleArtClick}
                                />
                            </Link>
                        )
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//breaking news component
const Breaking = ({ image, title }) => {
  return (
    <div className="" id="breaking">
      <Link to={"/react-blog/" + title}>
        <img src={image} alt="breaking bImg" />
        <h6>{title}</h6>
      </Link>
    </div>
  );
};

//no image article component;
const ArticleTitle = ({ title, name, date }) => {
  return (
    <div className="articleTitle">
        <h3>{title}</h3>
        <div className="auth-date">
          <p>{name}</p>
          <p>{date}</p>
        </div>
      
    </div>
  );
};

export default Home;
