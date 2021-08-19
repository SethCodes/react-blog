import React, { useState, useEffect } from "react";
import "../css/Post.css";
import { useSelector } from "react-redux";

const Post = (props) => {
  //console.log(props)
  let title = props.match.params.title;

  //state controls
  const [post, setPost] = useState(null);
  const stateArt = useSelector((state) => state.article);

  let currentPost = stateArt.find((post) => title === post.title);

  useEffect(() => {
    setPost(currentPost);
  }, []);

  return (
    <div id="postDiv">
      {!post ? (
        "loading"
      ) : (
        <div className="postDiv">
          <img src={post.image} alt="urlToimage" />
          <div className="content">
            <h1>{post.title}</h1>
            <p>By: {post.author}</p>
            <p>{post.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
