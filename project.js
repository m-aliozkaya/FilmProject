const form = document.getElementById("film-form");
const nameFilm = document.querySelector("#title");
const directorFilm = document.querySelector("#director");
const urlFilm = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

// UI objesini başlatma
const ui = new UI();

// Storage objesini başlatma
const storage = new Storage();

// Tüm eventleri yükleme
eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded", function () {
    let films = storage.getFilmsFromStorage();
    ui.loadAllFilms(films);
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
    ui.displayMessages("Tüm alanları doldurun", "danger");
  } else {
    // Yeni film
    const film = new Film(name, director, url);
    ui.addFilmToUI(film); // Arayüze film ekleme
    storage.addFilmToStorage(film); // Storage' e film ekleme
    ui.displayMessages("Film basariyla eklendi", "success");
  }

  ui.clearInputs(nameFilm, directorFilm, urlFilm);

  e.preventDefault();
}

function deleteFilm(e) {
  if (e.target.id === "delete-film") {
    ui.deleteFilmFromUI(e.target);
    storage.deleteFilmFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    );
    ui.displayMessages("Film başarıyla silindi", "warning");
  }
}

function clearAllFilms(){

    if(confirm("Emin Misiniz")){
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }
   
}