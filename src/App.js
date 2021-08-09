import React, {  useEffect } from "react";
import "../src/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Navbar";
import "./css/App.css";
import $ from "jquery";
import Header from "./Components/HomePage/Header";


const App = () => {

 




  //find and style all nav-links
  useEffect(() => {
    let links = $(document.getElementsByClassName("nav-link"));
    links.addClass("text-white");
    // console.log(links);
  });

    return (
      <div className="App">
        <header className="App-header"></header>
        <body>
          <NavBar sticky="top" />
          <Header />
        </body>
      </div>
    );
  };
  

export default App;
