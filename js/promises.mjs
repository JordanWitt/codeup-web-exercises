// let repos
// let commit
// fetch('https://api.github.com/users',{headers: {'Authorization': ghKey}}).then( response => {
//     response.json().then( users => {
//         repos = users[8].repos_url
//         fetch(repos,{headers: {'Authorization': ghKey}}).then(response => {
//             console.log(response);
//             response.json().then( users => {
//                 commit = users[0].commits_url.split('{')[0]
//                 fetch(commit, {headers: {'Authorization': ghKey}}).then(response =>
//                     response.json()).then( users => {
//                     console.log(users[0].commit.author.date.split('T')[0])
//                     return users[0].commit.author.date.split('T')[0]
//                 })
//             })
//         })
//     });
// });

//
// function wait(num){
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, num)
//         setTimeout(reject,num)
//     })
// }
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(4000).then(() => console.log('You\'ll see this after 4 seconds'));

//USED TO DISPLAY LOADING ONCE PAGE IS DONE LOADING
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};

//STAR RATING FUNCTION
// Setting stars


fetch(`https://buttoned-awake-trumpet.glitch.me/movies`).then(response => console.log(response.json()))
//FETCG FOR THE MOVIES LIST
let url = `https://buttoned-awake-trumpet.glitch.me/movies`
//GET REQUEST
function displayMovies() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            $('.row').empty();
            data.forEach(movie => {
                let html = "";
                html +=`<div class="col">`;
                html += `<h1>${movie.title} </h1>` + `<h6> Rating: ${movie.rating}</h6></div>`;
                html += `</div>`

                $('.row').append(html);
                let html2 = "";
                html2 += `<option> ${movie.title} - ${movie.rating}</option>`
                $('#rating-selection').append(html2)
            })
        })
}
displayMovies()

//POST REQUEST

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(reviewObj),
};
fetch(url, options)
    .then( response => console.log(response) ) /* review was created successfully */
    .catch( error => console.error(error) );


//APPEND THE LIST TO A FORM
