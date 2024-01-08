const repositories = {
    list: [],
    addRepo(gitHubRepos) {
        if (this.list.length < 10) {
            // Only consider PushEvent or CreateEvent
            const repo = {
                repoName: gitHubRepos.name,
                forks: gitHubRepos.forks_count,
                stars: gitHubRepos.stargazers_count,
                watchers: gitHubRepos.watchers_count,
                language: gitHubRepos.language,
            };
            this.list.push(repo);
        }
    },
    clearRepos() {
        this.list = [];
    }
};

export { repositories };