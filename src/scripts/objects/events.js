const events = {
    list: [],
    addEvent(gitHubEvent) {
        if (this.list.length < 10) {
            // Only consider PushEvent or CreateEvent
            if (gitHubEvent.type === 'PushEvent' || gitHubEvent.type === 'CreateEvent') {
                const event = {
                    type: gitHubEvent.type,
                    repoName: gitHubEvent.repo.name,
                    message: gitHubEvent.payload && gitHubEvent.payload.commits ? gitHubEvent.payload.commits[0].message : 'Created'
                    // ^ Adjust how you access the event details according to the GitHub API response structure
                };
                this.list.push(event);
            }
        }
    },
    clearEvents() {
        this.list = [];
    }
};

export { events };