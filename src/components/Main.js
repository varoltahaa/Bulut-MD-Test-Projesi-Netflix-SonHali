import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <section className="main-container">
      <div className="location" id="home" >
        <h1 id="home">Categories</h1>
        <div className="box" id="main">
          <Link to="movies">
            <a href="" >
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/9/98/U2_Innocence_%2B_Experience_-_Live_in_Paris_video_cover.jpg"
                alt=""
              ></img>
              <h2>Movies</h2>
              
            </a>
          </Link>
          <Link to="serias" >
            <a href="">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/e/eb/Wolfcreek.png"
                alt=""
              ></img>
              <h2>Series</h2>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Main;
