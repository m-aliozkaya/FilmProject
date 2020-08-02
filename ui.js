function UI() {}
UI.prototype.addFilmToUI = function (film) {
  const filmList = document.getElementById("films");
  filmList.innerHTML += `
    <tr>
    <td><img src="${film.url}" class="img-fluid img-thumbnail" /></td>
    <td>${film.name}</td>
    <td>${film.director}</td>
    <td>
      <a href="#" id="delete-film" class="btn btn-danger"
        >Filmi Sil</a
      >
    </td>
    `;
};

UI.prototype.clearInputs = function (element1, element2, element3) {
  element1.value = "";
  element2.value = "";
  element3.value = "";
};

UI.prototype.displayMessages = function (message, type) {
  const cardBody = document.querySelectorAll(".card-body")[1];
  // Alert div ini olusturma

  const div = document.createElement("div");
  div.className = `alert alert-${type}`;
  div.textContent = message;

  if (!cardBody.parentNode.contains(document.querySelector(".alert"))) {
    cardBody.parentNode.insertBefore(div, cardBody);
  }

  setTimeout(function () {
    div.remove();
  }, 1000);
};

UI.prototype.loadAllFilms = function(films){
    const filmList = document.getElementById("films");

    films.forEach(function(film){
        filmList.innerHTML += `
        <tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail" /></td>
        <td>${film.name}</td>
        <td>${film.director}</td>
        <td>
          <a href="#" id="delete-film" class="btn btn-danger"
            >Filmi Sil</a
          >
        </td>
        `;
    });
}

UI.prototype.deleteFilmFromUI = function (element){
    element.parentElement.parentElement.remove();
}

UI.prototype.clearAllFilmsFromUI = function(){
    const filmsList = document.getElementById("films");

    while(filmsList.firstElementChild !== null){
        filmsList.firstElementChild.remove();
    }
}

