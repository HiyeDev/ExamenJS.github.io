const json = "https://github.com/HiyeDev/ExamenJS.github.io/pelis.json"

function showFilms() {
    fetch(json)
    .then(response => response.json())
    .then(data => {
        const containerFilm = document.querySelector(".container-film");
        for (let i = 0; i < data.peliculas.length; i++) {
            containerFilm.innerHtml = `
                <div class="film">
                    <h5>${data.pelicular[i].titulo}</h5>
                    <img src="https://github.com/HiyeDev/ExamenJS.github.ior/${data.peliculas[i].img}">
                </div
            `
        }
    })
}