let repos
let commit
fetch('https://api.github.com/users',{headers: {'Authorization': ghKey}}).then( response => {
    response.json().then( users => {
        repos = users[8].repos_url
        fetch(repos,{headers: {'Authorization': ghKey}}).then(response => {
            console.log(response);
            response.json().then( users => {
                commit = users[0].commits_url.split('{')[0]
                fetch(commit, {headers: {'Authorization': ghKey}}).then(response =>
                    response.json()).then( users => {
                    console.log(users[0].commit.author.date.split('T')[0])
                    return users[0].commit.author.date.split('T')[0]
                })
            })
        })
    });
});


function wait(num){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, num)
        setTimeout(reject,num)
    })
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(4000).then(() => console.log('You\'ll see this after 4 seconds'));

