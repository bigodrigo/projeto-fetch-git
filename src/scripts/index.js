import { getUser } from "./services/user.js"
import { getRepositories } from "./services/repositories.js"
import { getEvents } from "./services/events.js"
import { events } from "./objects/events.js"
import { user } from "./objects/user.js"
import { repositories } from "./objects/repositories.js"
import { screen } from "./objects/screen.js"

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value

    if(validateEmptyInput(userName)) return
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        if(validateEmptyInput(userName)) return
        getUserData(userName)
    }
})

async function getUserData(userName) {

    const userResponse = await getUser(userName)

    if(userResponse.message === "Not found") {
        screen.renderNotFound()
        return
    }

    const repositoriesResponse = await getRepositories(userName)
    repositories.clearRepos(); // Clear existing repositories
    repositoriesResponse.forEach(repo => {
        repositories.addRepo(repo);
    });

    const eventsResponse = await getEvents(userName);
    events.clearEvents(); // Clear existing events
    eventsResponse.forEach(event => {
        events.addEvent(event);
    });
    user.setInfo(userResponse)
    user.setRepositories(repositories.list)
    user.setEventList(events.list)
    console.log(repositories.list)
    screen.renderUser(user)
    // screen.renderEvents(events.list);
}

function validateEmptyInput(userName) {
    if(userName.length === 0) {
        alert('Preencha o campo com o nome de usuário do GitHub!')
        return true
    }
}