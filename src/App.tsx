import { lazy, Suspense } from "react";
import Loading from "./components/loading";
const Nav = lazy(() => import("./components/Nav"));
const Main = lazy(() => import("./components/Main"));
import {
  FetchGithub,
  type FetchGithubResponsePromise,
} from "./utils/FetchGithub";

function App() {
  const fetchGithubPromise: FetchGithubResponsePromise = FetchGithub();
  return (
    <Suspense fallback={<Loading />}>
      <Nav />
      <Main FetchGithubPromise={fetchGithubPromise} />
    </Suspense>
  );
}

export default App;
