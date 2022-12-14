// Mock data for repos, this will be used in case the api request fails

const mockReposData = [
  {
    id: 203021727,
    node_id: "MDEwOlJlcG9zaXRvcnkyMDMwMjE3Mjc=",
    name: "CreateSpace",
    full_name: "Dakshbarad/CreateSpace",
    private: false,
    owner: {
      login: "Dakshbarad",
      id: 35626597,
      node_id: "MDQ6VXNlcjM1NjI2NTk3",
      avatar_url: "https://avatars3.githubusercontent.com/u/35626597?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Dakshbarad",
      html_url: "https://github.com/Dakshbarad",
      followers_url: "https://api.github.com/users/Dakshbarad/followers",
      following_url:
        "https://api.github.com/users/Dakshbarad/following{/other_user}",
      gists_url: "https://api.github.com/users/Dakshbarad/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Dakshbarad/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/Dakshbarad/subscriptions",
      organizations_url: "https://api.github.com/users/Dakshbarad/orgs",
      repos_url: "https://api.github.com/users/Dakshbarad/repos",
      events_url: "https://api.github.com/users/Dakshbarad/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Dakshbarad/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/Dakshbarad/CreateSpace",
    description:
      "This is a public repository for pitching in ideas and work together on it.",
    fork: false,
    url: "https://api.github.com/repos/Dakshbarad/CreateSpace",
    forks_url: "https://api.github.com/repos/Dakshbarad/CreateSpace/forks",
    keys_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/Dakshbarad/CreateSpace/teams",
    hooks_url: "https://api.github.com/repos/Dakshbarad/CreateSpace/hooks",
    issue_events_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/issues/events{/number}",
    events_url: "https://api.github.com/repos/Dakshbarad/CreateSpace/events",
    assignees_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/branches{/branch}",
    tags_url: "https://api.github.com/repos/Dakshbarad/CreateSpace/tags",
    blobs_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/languages",
    stargazers_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/stargazers",
    contributors_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/contributors",
    subscribers_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/subscribers",
    subscription_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/subscription",
    commits_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/Dakshbarad/CreateSpace/merges",
    archive_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/downloads",
    issues_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/labels{/name}",
    releases_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/Dakshbarad/CreateSpace/deployments",
    created_at: "2019-08-18T15:16:39Z",
    updated_at: "2019-08-18T15:31:27Z",
    pushed_at: "2019-08-18T15:31:29Z",
    git_url: "git://github.com/Dakshbarad/CreateSpace.git",
    ssh_url: "git@github.com:Dakshbarad/CreateSpace.git",
    clone_url: "https://github.com/Dakshbarad/CreateSpace.git",
    svn_url: "https://github.com/Dakshbarad/CreateSpace",
    homepage: null,
    size: 1,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master",
  },
  {
    id: 328702628,
    node_id: "MDEwOlJlcG9zaXRvcnkzMjg3MDI2Mjg=",
    name: "github-users-project",
    full_name: "Dakshbarad/github-users-project",
    private: false,
    owner: {
      login: "Dakshbarad",
      id: 35626597,
      node_id: "MDQ6VXNlcjM1NjI2NTk3",
      avatar_url: "https://avatars3.githubusercontent.com/u/35626597?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Dakshbarad",
      html_url: "https://github.com/Dakshbarad",
      followers_url: "https://api.github.com/users/Dakshbarad/followers",
      following_url:
        "https://api.github.com/users/Dakshbarad/following{/other_user}",
      gists_url: "https://api.github.com/users/Dakshbarad/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Dakshbarad/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/Dakshbarad/subscriptions",
      organizations_url: "https://api.github.com/users/Dakshbarad/orgs",
      repos_url: "https://api.github.com/users/Dakshbarad/repos",
      events_url: "https://api.github.com/users/Dakshbarad/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Dakshbarad/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/Dakshbarad/github-users-project",
    description:
      "This repository contains the github users project created using  react and github api. The project is hosted on netlify.",
    fork: false,
    url: "https://api.github.com/repos/Dakshbarad/github-users-project",
    forks_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/forks",
    keys_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/teams",
    hooks_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/hooks",
    issue_events_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/events",
    assignees_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/tags",
    blobs_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/languages",
    stargazers_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/stargazers",
    contributors_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/contributors",
    subscribers_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/subscribers",
    subscription_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/subscription",
    commits_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/merges",
    archive_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/downloads",
    issues_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/labels{/name}",
    releases_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/Dakshbarad/github-users-project/deployments",
    created_at: "2021-01-11T15:10:13Z",
    updated_at: "2021-01-11T17:10:12Z",
    pushed_at: "2021-01-11T17:10:10Z",
    git_url: "git://github.com/Dakshbarad/github-users-project.git",
    ssh_url: "git@github.com:Dakshbarad/github-users-project.git",
    clone_url: "https://github.com/Dakshbarad/github-users-project.git",
    svn_url: "https://github.com/Dakshbarad/github-users-project",
    homepage: null,
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
  },
];

export default mockReposData;
