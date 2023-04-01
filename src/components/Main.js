import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSeries, getMovies } from "../services/api"

const Main = () => {

  const [seriesRandomImage,setSeriesRandomImage] = useState(null);
  const [moviesRandomImage,setMoviesRandomImage] = useState(null);

  useEffect(() => {
    getMovies().then((data) => { // "getMovies() fonksiyonu ile veriyi alıyoruz burada "data" içinde tutuyoruz
      const shuffledMovies = shuffleArray(data);// "shuffleArray(data)" fonksiyonu ile gelen data yı karıştırıyoruz.
      const movie = shuffledMovies[0];// üst satırda her yenilendiğinde 0. indexsinde olan data değişmiş olacak bu sayede ekrana her seferinde farklı bir resim getiricez
      setMoviesRandomImage(movie.images["Poster Art"].url);// bu satırda ise üst satırdaki movie degişkenine set etmiş olduğumuz datayı state dizisine atabilmek için setStatini kullanıyoruz
    });
  }, []);

  useEffect(() => {
    getSeries().then((data) => {
      const shuffledSeries = shuffleArray(data);
      const serie = shuffledSeries[0];
      setSeriesRandomImage(serie.images["Poster Art"].url);
    });
  }, []);


 const shuffleArray = (array) => { //"shuffleArray" adında bir fonksiyon tanımlıyoruz. Bu fonksiyon, "array" adında bir parametre alıyor.
    let currentIndex = array.length; //"currentIndex" adında bir değişken oluşturuyoruz ve bu değişkene dizinin uzunluğunu atıyoruz.
    let temporaryValue; //"temporaryValue" adında bir geçici değer saklamak için değişken tanımlıyoruz.
    let randomIndex; //"randomIndex" adında, rastgele bir indeks saklamak için değişken tanımlıyoruz.

    while (0 !== currentIndex) {//"currentIndex" değeri 0 olmadığı sürece döngüyü sürdürüyoruz.
      randomIndex = Math.floor(Math.random() * currentIndex);  //"randomIndex" değişkenine, 0 ile "currentIndex" arasında rastgele bir tam sayı değeri atıyoruz.
      currentIndex -= 1; //"currentIndex" değerini 1 azaltarak döngüyü bir sonraki elemana taşıyoruz.

      temporaryValue = array[currentIndex]; //Şu anki "currentIndex" değerine karşılık gelen dizi elemanını "temporaryValue" değişkenine atıyoruz.
      array[currentIndex] = array[randomIndex]; //Rastgele seçilen indeksteki "randomIndex" elemanı, şu anki indekse "currentIndex" atıyoruz.
      array[randomIndex] = temporaryValue; //"temporaryValue" değişkeninde sakladığımız orijinal elemanı, rastgele seçilen indekse geri atıyoruz. Bu işlem, iki elemanın yerlerini değiştirir.
    }

    return array;
  };



  return (
    <section className="main-container">
      <div className="location" id="home" >
        <h1 id="home">Categories</h1>
        <div className="box" id="main">
          <Link to="movies">
            
              <a href="" >
                <img
                  src={moviesRandomImage}
                  alt=""
                ></img>
                <h2>Movies</h2>

              </a>
           

          </Link>
          <Link to="serias" >
          
              <a href="">
                <img
                  src={seriesRandomImage}
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

