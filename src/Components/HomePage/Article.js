import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';


function Article({ header, date, author, link, onClick }) {
  return (
    <div>
    <Link to={'/react-blog/' + link}
    onClick={onClick}>
      <h6>{header}</h6></Link>
      <div className={"date-author"}>
        <p>{date}</p>
        <p>{author}</p>
      </div>
    </div>
  );
}

export default Article;
