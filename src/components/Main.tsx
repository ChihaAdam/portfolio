
import Intro from "./sections/Intro"
import { use } from "react"
import { FetchGithub } from "../utils/FetchGithub"
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./Contact";
import Certifications from "./sections/certifications";
function Main() {
  const {bio,avatar_url,public_repos} = use(FetchGithub);
  return (
      <>
      <Intro bio={bio} avatar={avatar_url} public_repos={public_repos} />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      </>
  )
}

export default Main
