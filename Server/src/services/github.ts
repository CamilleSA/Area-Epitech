var octokit: any = require("@octokit/rest");

export namespace Github {
    export var getNewRepo = async (params: any) => {
        const oc: any = new octokit.Octokit({
            auth: params.token
        });
        console.log('getNewRepo');
        const allRepo: any = await oc.repos.listForUser({
            username: params.owner
        });
        let name: any;
        let id = 0;
        allRepo.data.forEach( (tmp: any) => {
            if (tmp.id > id) {
                id = tmp.id;
                name = tmp.name;
            }
        });
        return ({"result": "repository: " + name});
    };
    export var getNewBranch = async (params: any) => {
        const oc: any = new octokit.Octokit({
            auth: params.token
        });
        console.log('getNewBranch');
        const allBranch: any = await oc.repos.listBranches({
            owner: params.owner, repo: params.repo
        });
        return ({"result": "repository " + params.repo + ": " +
            "branch: " + allBranch.data[0].name});
    };
    export var getOrganization = async (params: any) => {
        const oc: any = new octokit.Octokit({
            auth: params.token
        });
        console.log('getOrganization');
        const allOrgs: any = await oc.orgs.listForAuthenticatedUser();
        return ({"result": "organization: " + allOrgs.data[allOrgs.data.length - 1].login});
    };
    export var getCommit = async (params: any) => {
        const oc: any = new octokit.Octokit({
            auth: params.token
        });
        console.log('getCommit');
        const allcommit: any = await oc.repos.listCommits({
            owner: params.owner, repo: params.repo
        });
        return ({"result": "repository " + params.repo + ": " +
            "commit: " + allcommit.data[0].commit.message});
    };
    export var createIssue = async (params: any) => {
        const oc: any = new octokit.Octokit({
            auth: params.token
        });
        console.log('createIssue');
        await oc.issues.create({
            owner: params.owner, repo: params.repo, title: params.title
        });
    };
    export var deleteRepo = async (params: any) => {
        const oc: any = new octokit.Octokit({
            auth: params.token
        });
        console.log('deleteRepo');
        await oc.repos.delete({
            owner: params.owner, repo: params.repo
        });
    };
    export var createComment = async (params: any) => {
        const oc: any = new octokit.Octokit({
            auth: params.token
        });
        console.log('createComment');
        await oc.issues.createComment({
            owner: params.owner, repo: params.repo,
            issue_number: params.issue, body: params.message
        });
    };
    export var createRepo = async (params: any) => {
        const oc: any = new octokit.Octokit({
            auth: params.token
        });
        console.log('createRepo');
        await octokit.repos.createForAuthenticatedUser({
            name: params.name
        });
    };
    export var acceptRepoInvit = async (params: any) => {
        const oc: any = new octokit.Octokit({
            auth: params.token
        });
        console.log('acceptRepoInvit');
        let list: any = await octokit.repos.listInvitationsForAuthenticatedUser();
        if (!list)
            return ;
        await octokit.repos.acceptInvitation({
            invitation_id: list.repository.id
        });
    };
    export var getRepoInvit = async (params: any) => {
        const oc: any = new octokit.Octokit({
            auth: params.token
        });
        console.log('getRepoInvit');
        let list: any = await octokit.repos.listInvitationsForAuthenticatedUser();
        return ({"result": "invitation " + list.repository.id });
    };
    /*
    export var compareCommit = async (params: any) => {
        const oc: any = new octokit.Octokit({
            auth: params.token
        });
        await octokit.repos.compareCommit({
            owner: params.name, repo: params.repo , base: params.base, head: params.head,
        });
    };
    */
}
