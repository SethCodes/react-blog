import React, { useEffect } from "react";
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import "../src/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Navbar";
import "./css/App.css";
import Header from "./Components/HomePage/Header";
import Post from './Components/Post';
import About from './Components/About';





function App () {
  

  return (
      <BrowserRouter>
        <NavBar sticky="top" />
    <div className="App">
        <Switch>
        <Route exact path="/" component={Header}/>
        <Route exact path="/react-blog/about" component={About}/>
        <Route exact path="/:title" component={Post}/>
        </Switch>
    </div>
      </BrowserRouter>
  );
};

export default App;
