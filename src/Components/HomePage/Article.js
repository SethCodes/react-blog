import React from "react";

function Article({ header, date, author, link }) {
  return (
    <div>
    <a href={'/' + link}>
      <h6>{header}</h6></a>
      <div className={"date-author"}>
        <p>{date}</p>
        <p>{author}</p>
      </div>
    </div>
  );
}

export default Article;
