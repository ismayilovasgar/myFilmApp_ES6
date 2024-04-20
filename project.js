const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


// Tum Eventleri Yukleme
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
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === "") {
    //  Hata
    UI.displayMessages("Tum Alanlari Doldurun", "danger");

  } else {
    // Yeni Film
    const newFilm = new Film(title, director, url);

    // Arayuze Film Ekleme
    UI.addFilmToUI(newFilm);

    // Storage film Ekleme
    Storage.addFilmToStorage(newFilm);

    UI.displayMessages("Film basariyla eklendi..", "success");
  }

  UI.clearInputs(titleElement, directorElement, urlElement);

  e.preventDefault();
}

function deleteFilm(e) {
  if (e.target.id === "delete-film") {
    UI.deleteFilmFromUI(e.target);
    Storage.deleteFilmFromStorage(
      e.target.closest("tr").querySelector("td:nth-child(2)").textContent
    );
    UI.displayMessages("Silme islemi basarili...", "success");
  }
}

function clearAllFilms(e) {
  if (confirm("Eminmisiniz ?")) {
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
  }
}
