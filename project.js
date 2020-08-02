const form = document.getElementById("film-form");
const nameFilm = document.querySelector("#title");
const directorFilm = document.querySelector("#director");
const urlFilm = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

// Tüm eventleri yükleme
eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded", function () {
    let films = Storage.getFilmsFromStorage();
    UI.loadAllFilms(films);
  });
  cardBody.addEventListener("click", deleteFilm);
  clear.addEventListener("click", clearAllFilms);
}

function addFilm(e) {
  const name = nameFilm.value;
  const director = directorFilm.value;
  const url = urlFilm.value;

  if (name === "" || director === "" || url === "") {
    // Hata
    UI.displayMessages("Tüm alanları doldurun", "danger");
  } else {
    // Yeni film
    const film = new Film(name, director, url);
    UI.addFilmToUI(film); // Arayüze film ekleme
    Storage.addFilmToStorage(film); // Storage' e film ekleme
    UI.displayMessages("Film basariyla eklendi", "success");
  }

  UI.clearInputs(nameFilm, directorFilm, urlFilm);

  e.preventDefault();
}

function deleteFilm(e) {
  if (e.target.id === "delete-film") {
    UI.deleteFilmFromUI(e.target);
    Storage.deleteFilmFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
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
