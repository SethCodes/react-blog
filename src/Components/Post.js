import React, { useState, useEffect } from "react";
import axios from "axios";
import '../css/Post.css';
import {useSelector} from 'react-redux';




const Post = (props) => {
  //console.log(props)
  let title = props.match.params.title;
    //state controls
  const [post, setPost] = useState(null);
  const stateUrl = useSelector(state => state.url);



  useEffect(() => {
      
    axios.get(stateUrl).then((res) => {
//console.log(stateUrl);
        setPost(res.data.articles.find((post) => title === post.title)
        )
    });
  }, []);

  return (
    <div id="postDiv">
      {!post ? "loading" : (<div className="postDiv">
            <img src={post.urlToImage} alt=""/>
            <div className="content">
          <h1>{post.title}</h1>
          <p>By: {post.author}</p>
          <p>{post.content}</p>
          </div>
      </div>)}
    </div>
  );
};

export default Post;
