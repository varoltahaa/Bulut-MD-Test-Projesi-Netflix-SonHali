import React from "react";
import { Link } from "react-router-dom";
const Navi = () => {
  return (
    <div>
      <header>
        <div className="netflixLogo">
          <a id="logo" href="/">
            <img
              src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true"
              alt="Logo Image"
            ></img>
          </a>
        </div>
        <nav className="main-nav ">
          <a href="/">Home</a>
          <Link to="serias">
          <a>Series</a>
          </Link>
          <Link to="movies">
          <a>Movies</a>
          </Link>
        </nav>
        <nav className="sub-nav">
          <a href="#">Account</a>
        </nav>
      </header>
    </div>
  );
};

export default Navi;
