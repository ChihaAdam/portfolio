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
});