import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <section className="main-container">
      <div className="location" id="home">
        <h1 id="home">Categories</h1>
        <div className="box">
          <Link to="movies">
            <a href="">
              <img
                src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p2.PNG?raw=true"
                alt=""
              ></img>
              Movies
            </a>
          </Link>
          <Link to="serias">
            <a href="">
              <img
                src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p2.PNG?raw=true"
                alt=""
              ></img>
              Serias
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Main;
