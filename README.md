# GitHub fetch challenge

This project is a milestone of a FullStack developer course, serving to reinforce foundational principles and then upload it to a GitHub repository.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Layout](#-layout)
  - [Links](#links)
- [My process](#my-process)
  - [Technologies](#-technologies)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users are able to enter information into the designated input field. Upon submitting, the information of an existing GitHub account will be loaded.
The starting point of the challenge had already a basic structure with the HTML, styles and the JavaScript codes for the username and 10 first repositories of any user.

Mine improvements should allow users be able to:

[x] See the number of followers and following from that user;
[x] Show the last 10 events, but ONLY from Updated or Created repositories;
[x] Bring more information from the repositories, such as how many stars, watchers, forks and what is the most relevant language.


### 🔖 Layout

<div align="center">
    <p>User information:</p>
    <img src="./design/user-info.png">
</div>

<div align="center">
    <p>Events information:</p>
    <img src="./design/event-info.png">
</div>

### Links

- Starting Point URL: [GitHub Repo](https://github.com/devemdobro/projeto-inicial-fetch-github-api)
- Solution URL: [GitHub Repo](https://github.com/bigodrigo/projeto-fetch-git)
- Live Site URL: [GitHub Page](https://bigodrigo.github.io/projeto-fetch-git)

## My process

### 🚀 Technologies

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript
- API manipulation

### What I learned

I have previous experience working on projects involving JavaScript, in this project, I explored another way of manipulating the document for the verification of an empty field and also the use of the "ENTER" button from the user's keyboard. 
I think it is important to add that there is no need for authentication, the information is limited to whatever the user has deemed "public". There is a small verification for some missing data, such as the cases like users without a bio. Also there are 2 different ways of limiting the list of repositories to a maximum of 10, using the "?perpage" versus the "ifs, array.lenght,..."
Another noteworthy point is that this code is structured to keep the fetch as a service and it's responses as objects, we can verify that this objects have their own functions that will allow for the render of the page.

```js
    document.getElementById('btn-search').addEventListener('click', () => {
        const userName = document.getElementById('input-search').value
        if(validateEmptyInput(userName)) return
        getUserData(userName)})
    document.getElementById('input-search').addEventListener('keyup', (e) => {
        const userName = e.target.value
        const key = e.which || e.keyCode
        const isEnterKeyPressed = key === 13
        if (isEnterKeyPressed) {
            if(validateEmptyInput(userName)) return
            getUserData(userName)
        }})
```

```js
const events = {
    list: [],
    addEvent(gitHubEvent) {
        if (this.list.length < 10) {
            if (gitHubEvent.type === 'PushEvent' || gitHubEvent.type === 'CreateEvent') {
                const event = {
                    type: gitHubEvent.type,
                    repoName: gitHubEvent.repo.name,
                    message: gitHubEvent.payload && gitHubEvent.payload.commits ? gitHubEvent.payload.commits[0].message : 'Created'};
                this.list.push(event);}}},
    clearEvents() {
        this.list = [];
    }};
```

## Author

- Portfolio - [Rodrigo](https://portfolio-bigodrigo.vercel.app/)
- GitHub - [bigodrigo](https://github.com/bigodrigo)
- Linkedin - [rodrigo-boquer](https://www.linkedin.com/in/rodrigo-boquer/)