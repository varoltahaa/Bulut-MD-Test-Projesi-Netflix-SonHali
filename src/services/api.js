//Bu fonksiyonlar, fetch fonksiyonu kullanarak HTTP adreslerine GET isteği gönderir.
//Bu istek sonucu alınan JSON verileri, response.json() metodu ile parse edilir ve data değişkenine atanır.
//data değişkeni fonksiyonun döndürdüğü değerdir.

export const getSeries = () => {
    return fetch("http://localhost:3000/entries?programType=series")
      .then((response) => response.json())
      .then((data) => data);
  };

export const getMovies = () => {
    return fetch("http://localhost:3000/entries?programType=movie")
      .then((response) => response.json())
      .then((data) => data);
  };

