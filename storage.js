class Storage {
  static addFilmToStorage(newFilm) {
    let films = this.getFilmsFromStorage();
    /*
  [
        {title:"adsadsad",director:"sadsd",url:"asdsad"},
        {title:"adsadsad",director:"sadsd",url:"asdsad"},
        {title:"adsadsad",director:"sadsd",url:"asdsad"},
  ]
  */
    films.push(newFilm);
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

  static deleteFilmFromStorage(filmTitle) {
    let films = this.getFilmsFromStorage();
    films.map((film, index) => {
      if (film.title === filmTitle) films.splice(index, 1);
    });
    localStorage.setItem("films", JSON.stringify(films));
  }

  static clearAllFilmsFromStorage() {
    localStorage.removeItem("films");
  }
}
