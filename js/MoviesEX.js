const movieUrl = `https://periwinkle-generated-pyroraptor.glitch.me/movies`;
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

function getMovies() {
    fetch(movieUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            showMovies(data)
        })
}
getMovies()
function showMovies(data){
    main.innerHTML= '';

    data.forEach(movie => {
        const {title, img, vote_average, overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML =`
            <img src="${img}" alt="${title}">
                <div class="movie-info">
                    <h1>${title}</h1>
                    <span class="${getColor(vote_average)}">${vote_average}</span>
                </div>
                <div class="overview">
                    <h3>Overview</h3>
                    ${overview}
                </div>
                `
        main.appendChild(movieEl);
    })
}

function getColor(vote){
    if(vote >= 8){
        return 'green'
    }else if(vote >= 5){
        return 'orange'
    }else{
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if(searchTerm) {
        getMovies(searchTerm)
    }
})

//LOADING
$(window).load(function() {
    $('#loading').hide();
});