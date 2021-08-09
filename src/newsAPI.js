import axios from 'axios';
const blogs = ["one", "two"];
const url = `http://newsapi.org/v2/everything?q=ai&apiKey=41d85d23b2f640b0892f12ae01b9a373`;

function getNews(){
axios.get(url)
.then(res => {
  let data = res.json();
  let articles = data.articles;
  console.log(articles);
  console.log("blah");



})
  return blogs;
}

getNews();


export default blogs;
