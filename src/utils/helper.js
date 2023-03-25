
//"searchTerm" ve "model" diye iki parametre alıyor. "searchTerm" inputa girilen değer, "model" arama yapılacak nesnelerin listesini temsil ediyor.
//"[...model]" dizi ile gelen dizinin bir kopyasını filtered klasörüne aktarır.
//"searchTerm" değişkenş boş değilse ve uzunluğu 3'den fazlaysa "filtered" listesi filtrenir.
//gelen değerler küçük harfe çevrilir ve return edilir.
export const handleSearch = (searchTerm, model) => {
    let filtered = [...model];
    if (searchTerm !== "" && searchTerm.length >= 3) {
      filtered = filtered.filter((model) =>
      model.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filtered;
  };


//"sortType" ve "model" diye iki parametre alıyor. "sortType" kullanıcının seçtiği sıralam tipi, "model" sıralama yapılacak nesnelerin listesini temsil ediyor.
//"[...model]" dizi ile gelen dizinin bir kopyasını sorted klasörüne aktarır.
//daha sonra gelen value değerine göre şartlara girip sıralam yapar
  export const handleSort = (sortType, model) => {
    let sorted = [...model];
    if (sortType === "asc") {
      sorted = sorted.sort(
        (a, b) => parseInt(a.releaseYear, 10) - parseInt(b.releaseYear, 10)
      );
    } else if (sortType === "desc") {
      sorted = sorted.sort(
        (a, b) => parseInt(b.releaseYear, 10) - parseInt(a.releaseYear, 10)
      );
    } else if (sortType === "random") {
      sorted = sorted.sort(() => Math.random() - 0.5);
    }
    return sorted;
  };

