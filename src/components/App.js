import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header title="Overreacted" />
      <About src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F11%2Fthe-undertaker-retired-wwe-world-wrestling-entertainment-survivor-series-2020-announcement-tw.jpg?w=960&cbr=1&q=90&fit=max" about="Personal blog by Chacha E.T. I explain with words and code."/>
      <ArticleList />
    </div>
  );
}

export default App;
