document.addEventListener('DOMContentLoaded', function() {
    const nomeGit = document.querySelector('#nome')
    const sobrenomeGit = document.querySelector('#sobrenome')
    const fotoGit = document.querySelector('#foto')
    const repositorios = document.querySelector('#repositorios')
    const seguidores = document.querySelector('#seguidores')
    const seguindo = document.querySelector('#seguindo')
    const linkGit = document.querySelector('#link')

    fetch('https://api.github.com/users/igorlolyan')
        .then(function(res) {
            return res.json();
        })

        .then(function(json) {
            nomeGit.innerHTML = json.name;
            sobrenomeGit.innerHTML = `@${json.login}`;
            fotoGit.src = json.avatar_url;
            seguidores.innerHTML = json.followers;
            seguindo.innerHTML = json.following;
            repositorios.innerText = json.public_repos;
            linkGit.href = json.html_url;
        })
})