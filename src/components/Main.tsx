import Intro from "./sections/Intro";
import { use } from "react";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Certifications from "./sections/certifications";
import type { FetchGithubResponsePromise } from "../utils/FetchGithub";

interface MainProps {
  FetchGithubPromise: FetchGithubResponsePromise;
}
function Main({ FetchGithubPromise }: Readonly<MainProps>) {
  const { bio, avatar_url, public_repos } = use(FetchGithubPromise);
  return (
    <>
      <Intro bio={bio} avatar={avatar_url} public_repos={public_repos} />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
}

export default Main;
