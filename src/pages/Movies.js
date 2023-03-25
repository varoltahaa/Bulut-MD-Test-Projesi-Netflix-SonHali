import React, { useState, useEffect } from "react";
import { getMovies } from "../services/api";
import { handleSearch, handleSort } from "../utils/helper";

export default function Serias() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("asc");

  useEffect(() => {
    getMovies().then((data) => setMovies(data));
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortButtonClick = (event) => {
    setSortType(event.target.value);
  };

  const filteredMovies = handleSearch(searchTerm, movies);
  const sortedMovies = handleSort(sortType, filteredMovies);
  const moviesToDisplay = sortedMovies.slice(0, 18);

  return (
    <section className="main-container">
      <div className="inputContainer">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sort by
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                className="dropdown-item"
                type="button"
                value="asc"
                onClick={handleSortButtonClick}
              >
                Old Series
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="button"
                value="desc"
                onClick={handleSortButtonClick}
              >
                New Series
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="button"
                value="random"
                onClick={handleSortButtonClick}
              >
                Random
              </button>
            </li>
          </ul>
        </div>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
      </div>

      <div className="box">
        {moviesToDisplay.map((movies) => (
          <a key={movies.title} href="">
            <img src={movies.images["Poster Art"].url} alt=""></img>
            {movies.title}
            {movies.releaseYear}
          </a>
        ))}
      </div>
    </section>
  );
}
