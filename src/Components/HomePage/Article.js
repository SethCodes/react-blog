import React from "react";

function Article({ header, date, author }) {
  return (
    <div>
      <h6>{header}</h6>
      <div className={"date-author"}>
        <p>{date}</p>
        <p>{author}</p>
      </div>
    </div>
  );
}

export default Article;
