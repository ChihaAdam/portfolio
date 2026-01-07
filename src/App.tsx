import { lazy, Suspense } from "react";
import Loading from "./components/loading";
const Nav = lazy(() => import("./components/Nav"));
const Main = lazy(() => import("./components/Main"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Nav />
      <Main />
    </Suspense>
  );
}

export default App;
