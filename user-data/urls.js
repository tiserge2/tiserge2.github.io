const githubUsername = "tiserge2";
const mediumUsername = "sergioosson";

const createMediumURL = (username) => `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`;
const createGitConnectedURL = (username) => `https://gitconnected.com/v1/portfolio/${username}`;

export const URLs = {
    medium: createMediumURL(mediumUsername),
    gitConnected: createGitConnectedURL(githubUsername)
};
