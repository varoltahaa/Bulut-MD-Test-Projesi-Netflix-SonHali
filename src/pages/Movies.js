import React, { useState, useEffect } from "react";
import { getMovies } from "../services/api";
import { handleSearch, handleSort } from "../utils/helper";

export default function Movies() {
  //movies: Filmlerin listesini tutan state değişkenidir. İlk başta boş bir dizi ile başlatılır ve daha sonra getMovies() fonksiyonu ile bu değişkene değer atanır.
  const [movies, setMovies] = useState([]);
  //searchTerm: Arama çubuğundaki kullanıcının girdiği metni tutan state değişkenidir. 
  //İlk başta boş bir string ile başlatılır ve daha sonra handleSearchInputChange() fonksiyonu ile bu değişkene yeni değer atanır.
  const [searchTerm, setSearchTerm] = useState("");
  //sortType: Sıralama seçeneğini tutan state değişkenidir. 
  //İlk başta "asc" (artan) olarak başlatılır ve daha sonra handleSortButtonClick() fonksiyonu ile bu değişkene yeni değer atanır.
  const [sortType, setSortType] = useState("");

  //"useEffect" hooku ile component ilk kez render edildiğinde "getMovies()" fonksiyonu ile datayı alır. 
  //"[]" argümanı ile yapılmak istenen,"useEffect fonksiyonunu bir kez çalışmasını sağlamak bu sayede "getMovies()",
  // fonksiyonu sadece sayfa ilk yüklendiğinde çalışır sayfa güncellendiğinde herseferinde "getMovies()" çağrılmaz
  useEffect(() => {
    getMovies().then((data) => setMovies(data));
  }, []);

  //Inputa değer girdiğinde tetiklenen bir fonksiyondur. Değer tutar ve "setSearchTerm" fonksiyonu içine atar
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
   //Dropdown de seçilen butonun value değerini tutar. Değeri "setSortType" fonksiyonu içine atar
  const handleSortButtonClick = (event) => {
    setSortType(event.target.value);
  };


  //"filteredMovies" değişkeni, "handleSearch" yardımcı fonksiyonunu kullanarak "movies" dizisindeki filmler arasından kullanıcının arama terimine göre filtrelenmiş olan filmleri içerir.
  const filteredMovies = handleSearch(searchTerm, movies);
  //"sortedMovies" değişkeni, "handleSort" yardımcı fonksiyonunu kullanarak "filteredMovies" dizisini "sortType" değişkeninin değerine göre sıralar
  const sortedMovies = handleSort(sortType, filteredMovies);
  //"moviesToDisplay" değişkeni, sıralanmış "sortedMovies" dizisinin ilk 18 öğesini içerir. Böylece sayfada sadece ilk 18 film gösterilir.
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
