export default (data) => {
    return {
        type: 'vc_push',
        author: {
            name: data.actor.display_name,
            link: data.actor.links.html.href
        },
        repository: {
            name: data.repository.name,
            link: data.repository.links.html.href
        },
        data: {
            link: data.push.changes[0].links.html.href,
            branch: {
                name: data.push.changes[0].new.name,
                link: data.push.changes[0].new.links.html.href
            },
            commits: data.push.changes[0].commits.map((c) => {
                return {
                    hash: c.hash,
                    link: c.links.html.href,
                    message: c.message,
                    date: c.date
                };
            })
        }
    }
}