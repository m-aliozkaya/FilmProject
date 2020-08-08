const form = document.getElementById("film-form");
const nameFilm = document.querySelector("#title");
const directorFilm = document.querySelector("#director");
const categoryFilm = document.querySelector("#category");
const pointFilm = document.querySelector("#point");
const urlFilm = document.querySelector("#url");
const filmDiv = document.querySelector("#films");
const clear = document.getElementById("clear-films");

// Tüm eventleri yükleme
eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded", function () {
    let films = Storage.getFilmsFromStorage();
    UI.loadAllFilms(films);
  });
  filmDiv.addEventListener("click", deleteFilm);
  clear.addEventListener("click", clearAllFilms);
}

function addFilm(e) {
  const name = nameFilm.value;
  const director = directorFilm.value;
  const url = urlFilm.value;
  const point = pointFilm.value;
  const category = categoryFilm.value;

  if (
    name === "" ||
    director === "" ||
    url === "" ||
    point === "" ||
    categoryFilm === ""
  ) {
    // Hata
    UI.displayMessages("Tüm alanları doldurun", "danger");
  } else {
    // Yeni film
    const film = new Film(name, director, category, point, url);
    UI.addFilmToUI(film); // Arayüze film ekleme
    Storage.addFilmToStorage(film); // Storage' e film ekleme
    UI.displayMessages("Film basariyla eklendi", "success");
  }

  UI.clearInputs(nameFilm, directorFilm, urlFilm, pointFilm, categoryFilm);

  e.preventDefault();
}

function deleteFilm(e) {

  if (e.target.id === "delete-film") {
    UI.deleteFilmFromUI(e.target);
    Storage.deleteFilmFromStorage(
      e.target.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.firstElementChild.firstElementChild.childNodes[3].textContent
     ); 
     UI.displayMessages("Film başarıyla silindi", "warning");
  }
}

function clearAllFilms() {
  if (confirm("Emin Misiniz")) {
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
  }
}
