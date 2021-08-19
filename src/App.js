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
    <BrowserRouter>
    <div className="App">
        <NavBar sticky="top" />
        <Switch>
          <Route exact path="/" component={Header}/>
          <Route path="/about" component={About}/>
          <Route path="/:title" component={Post}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
        </Switch>
    </div>
      </BrowserRouter>
  );
};

export default App;
