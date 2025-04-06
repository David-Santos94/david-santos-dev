import Hero from "./components/Hero";
import About from "./components/About";
import { GlobalCss, Container } from "./styles";

function App() {
  return (
    <>
      <GlobalCss />
      <Hero />
      <About />
    </>
  );
}

export default App;
