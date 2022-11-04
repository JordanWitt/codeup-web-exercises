'use strict';

// fetch(`https://dog.ceo/api/breeds/image/random`)
//     .then(response => response.json())
//         .then(data => {
//             let pic = document.getElementById('img');
//             let div = document.createElement('div');
//             pic.src = data.message
//             div.append(pic);
//             document.body.append(div)
//         })


fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => {console.log(data);


})
//POST REQUEST
fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
        }),
        headers: {
                'Content-type': 'application/json; charset=UTF-8',
        },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

//DELETE REQUEST
fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
}).then(response => console.log(response.status))

