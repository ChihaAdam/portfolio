export const FetchGithub = Promise.all([
  fetch("https://api.github.com/users/chihaadam"),
  fetch("https://api.github.com/users/chihaadam/starred")
]).then(async ([userResponse, starredResponse]) => {
  if (!userResponse.ok || !starredResponse.ok) {
    throw new Error("Network response was not ok");
  }
  
  const userData = await userResponse.json();
  const starredRepos = await starredResponse.json();
  
  return {
    ...userData,
    total_stars: starredRepos.length
  };
}).catch((error) => {
  console.error("Error fetching GitHub data:", error);
  return {
    avatar_url: "",
    bio: "",
    public_repos: 0,
    total_stars: 0 
  };
});