import React, { useState, useEffect } from "react";
import axios from "axios";
import '../css/Post.css';



const Post = (props) => {
  console.log(props)
  let title = props.match.params.title;
    //state controls
  const [articles, setArticles] = useState(null);
  const [post, setPost] = useState(null);

  const url = `http://newsapi.org/v2/everything?q=ai&apiKey=41d85d23b2f640b0892f12ae01b9a373`;
  // const url = `http://newsapi.org/v2/everything?q=ai&apiKey=${APIKEY}`;

  useEffect(() => {
    axios.get(url).then((res) => {
        setPost(res.data.articles.find((post) => title === post.title)
        )
    });
  }, []);

  return (
    <div className="post">
      {!post ? "loading" : (<div className="postDiv" style={{color: 'black'}}>
          <h1>Article Title: {post.title}</h1>
          <h1>Author: {post.author}</h1>
          <h1>Description: {post.description}</h1>
      </div>)}
    </div>
  );
};

export default Post;
