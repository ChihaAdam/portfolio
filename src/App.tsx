import Nav from "./components/Nav";
import Main from "./components/Main";
import { Suspense } from "react";
import Loading from "./components/loading";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Nav />
      <Main />
    </Suspense>
  );
}

export default App;
