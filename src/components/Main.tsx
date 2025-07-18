
import Intro from "./Intro"
import { use } from "react"
import { FetchGithub } from "../utils/FetchGithub"
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
function Main() {
  const {bio,avatar_url,public_repos} = use(FetchGithub);
  return (
      <>
      <Intro bio={bio} avatar={avatar_url} public_repos={public_repos} />
      <Skills />
      <Projects />
      <Contact />
      </>
  )
}

export default Main
