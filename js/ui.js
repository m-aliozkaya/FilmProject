class UI {
  static addFilmToUI(film) {
    const filmList = document.getElementById("films");
    filmList.innerHTML += `
    <div id="film-card" class="card">
    <div class="row no-gutters">
      <div class="col-md-5">
        <img
          src="${film.url}"
          class="card-img"
          alt="${film.name}"
        />
      </div>
      <div class="col-md-6">
        <div class="card-body">
          <table class="table table-dark">
            <tbody>
              <tr>
                <th>Film İsmi</th>
                <td>${film.name}</td>
              </tr>
              <tr>
                <th>Yönetmen</th>
                <td>${film.director}</td>
              </tr>
              <tr>
                <th>Tür</th>
                <td>${film.category}</td>
              </tr>
              <tr>
                <th>IMDB</th>
                <td>${film.point}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="icons">
        <a href="#" 
          ><i id="delete-film" class="fas fa-trash-alt fa-2x"></i
        ></a>
        <a href="#"
          ><i id="edit-film" class="fas fa-edit fa-2x"></i></a>
      </div>
    </div>
    </div>
    <hr>
      `;
  }

  static clearInputs(element1, element2, element3, element4, element5) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
    element4.value = "";
    element5.value = "";
  }

  static displayMessages(message, type) {
    const formDiv = document.querySelector("#film-form");
    // Alert div ini olusturma

    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;

    if (!formDiv.parentNode.contains(document.querySelector(".alert"))) {
      formDiv.parentNode.insertBefore(div, formDiv);
      console.log(formDiv);
    }

    setTimeout(function () {
      div.remove();
    }, 1000);
  }

  static loadAllFilms(films) {
    const filmList = document.getElementById("films");

    films.forEach(function (film) {
      filmList.innerHTML += `
      <div id="film-card" class="card">
      <div class="row no-gutters">
        <div class="col-md-5">
          <img
            src="${film.url}"
            class="card-img"
            alt="${film.name}"
          />
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <table class="table table-dark">
              <tbody>
                <tr>
                  <th>Film İsmi</th>
                  <td>${film.name}</td>
                </tr>
                <tr>
                  <th>Yönetmen</th>
                  <td>${film.director}</td>
                </tr>
                <tr>
                  <th>Tür</th>
                  <td>${film.category}</td>
                </tr>
                <tr>
                  <th>IMDB</th>
                  <td>${film.point}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="icons">
          <a href="#"
            ><i id="delete-film" class="fas fa-trash-alt fa-2x"></i
          ></a>
          <a href="#"
            ><i id="edit-film" class="fas fa-edit fa-2x"></i
          ></a>
        </div>
      </div>
      </div>
      <hr>
        `;
    });
  }

  static deleteFilmFromUI(element) {
    element.parentElement.parentElement.parentElement.parentElement.remove();
  }

  static clearAllFilmsFromUI() {
    const filmsList = document.getElementById("films");

    while (filmsList.firstElementChild !== null) {
      filmsList.firstElementChild.remove();
    }
  }
}
