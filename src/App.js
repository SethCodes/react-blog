import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "../src/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Navbar";
import "./css/App.css";
import Header from "./Components/HomePage/Header";
import Post from './Components/Post';
import About from './Components/About';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';


function App () {
  
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
        <NavBar sticky="top" />
        <Switch>
          <Route exact path="/react-blog/" component={Header}/>
          <Route path="/react-blog/about" component={About}/>
          <Route path="/react-blog/:title" component={Post}/>
          <Route path="/react-blog/signup" component={Signup}/>
          <Route path="/react-blog/login" component={Login}/>
        </Switch>
    </div>
      </BrowserRouter>
  );
};

export default App;
