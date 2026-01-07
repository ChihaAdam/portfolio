export interface FetchGithubResponse {
  avatar_url: string;
  bio: string;
  public_repos: number;
  total_stars: number;
}
export type FetchGithubResponsePromise = Promise<FetchGithubResponse>;

export const FetchGithub: () => FetchGithubResponsePromise = async () => {
  try {
    const response = await Promise.all([
      fetch("https://api.github.com/users/chihaadam"),
      fetch("https://api.github.com/users/chihaadam/starred"),
    ]);
    const [userResponse, starredResponse] = response;
    if (!userResponse.ok || !starredResponse.ok) {
      if (userResponse.status === 403 || starredResponse.status === 403) {
        throw new Error(
          "GitHub API Rate Limit Exceeded (403). Try again later."
        );
      }
      throw new Error("Network response was not ok");
    }
    const userData = await userResponse.json();
    const starredRepos = await starredResponse.json();
    return {
      ...userData,
      total_stars: starredRepos.length,
    };
  } catch (err) {
    console.log(err);
    return {
      avatar_url: "",
      bio: "",
      public_repos: 0,
      total_stars: 0,
    };
  }
};
