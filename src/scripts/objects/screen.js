const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML =`<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                            <p>${user.followers ? `💕 ${user.followers} seguidores` : 'Não possui informação sobre seguidores 😢'}</p>
                                            <p>${user.following ? `💕 ${user.following} seguidores` : 'Não possui informação sobre seguindo 😢'}</p>
                                        </div>
                                    </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => {repositoriesItens +=`<li>
                                                                    <a href="${repo.html_url}" target="_blank">
                                                                    <div>
                                                                        <h3>${repo.repoName}</h3>
                                                                        <span>🍴${repo.forks}</span>
                                                                        <span>⭐${repo.stars}</span>
                                                                        <span>👀${repo.watchers}</span>
                                                                        <span>📄${repo.language}</span>
                                                                    </div>
                                                                    </a>
                                                                </li>`})
        
        if (user.repositories.length > 0) {
            this.userProfile.innerHTML +=   `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }

        let eventListItens = ''
        user.eventList.forEach(event => {eventListItens += `<p><b>${event.repoName}</b> - ${event.message}</p>`})

        if (user.eventList.length > 0) {
            this.userProfile.innerHTML +=   `<div class="repositories section">
                                                <h2>Últimos Eventos</h2>
                                                <div>${eventListItens}</div>
                                            </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }