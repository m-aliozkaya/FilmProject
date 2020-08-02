function Storage() {}

Storage.prototype.addFilmToStorage = function (film) {
    let films = this.getFilmsFromStorage();

    films.push(film);

    localStorage.setItem("films",JSON.stringify(films));
};

Storage.prototype.getFilmsFromStorage = function () {
  let films;

  if (localStorage.getItem("films") === null) {
    films = [];
  } else {
    films = JSON.parse(localStorage.getItem("films"));
  }

  return films;
};

Storage.prototype.deleteFilmFromStorage = function(title){
    let films = this.getFilmsFromStorage();

    // Splice
    films.forEach(function(film, index){
        if(film.name === title){
            films.splice(index, 1);
        }
    });

    localStorage.setItem("films", JSON.stringify(films));
}

Storage.prototype.clearAllFilmsFromStorage = function(){
    localStorage.removeItem("films");
}