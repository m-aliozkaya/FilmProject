class Storage {
  static addFilmToStorage(film) {
    let films = this.getFilmsFromStorage();

    films.push(film);

    localStorage.setItem("films", JSON.stringify(films));
  }

  static getFilmsFromStorage() {
    let films;

    if (localStorage.getItem("films") === null) {
      films = [];
    } else {
      films = JSON.parse(localStorage.getItem("films"));
    }

    return films;
  }

  static deleteFilmFromStorage(title) {
    let films = this.getFilmsFromStorage();

    // Splice
    films.forEach(function (film, index) {
      if (film.name === title) {
        films.splice(index, 1);
      }
    });

    localStorage.setItem("films", JSON.stringify(films));
  }

  static clearAllFilmsFromStorage() {
    localStorage.removeItem("films");
  }
}
