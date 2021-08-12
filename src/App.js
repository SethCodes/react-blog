import React, { useEffect } from "react";
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import "../src/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Navbar";
import "./css/App.css";
import $ from "jquery";
import Header from "./Components/HomePage/Header";
import Post from './Components/Post';
import About from './Components/About';



const App = () => {
  //find and style all nav-links
  useEffect(() => {
    let links = $(document.getElementsByClassName("nav-link"));
    links.addClass("text-white");
  });

  return (
      <BrowserRouter>
    <div className="App">
      
        <NavBar sticky="top" />
        <Switch>
        <Route exact path="/" component={Header}/>
        <Route exact path="/about" component={About}/>
        <Route path="/:title" component={withRouter(Post)}/>

        </Switch>

        
      
    </div>
      </BrowserRouter>
  );
};

export default App;
