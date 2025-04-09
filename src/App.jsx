import Hero from "./components/Hero";
import About from "./components/About";
import { GlobalCss, Container } from "./styles";
import { useRef } from "react";

function App() {
  const sectionsRefs = {
    home: useRef(null),
    about: useRef(null),
  };

  const scrollToSection = (key) => {
    const ref = sectionsRefs[key];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <GlobalCss />
      <Hero sectionRef={sectionsRefs.home} onNavigate={scrollToSection} />
      <About sectionRef={sectionsRefs.about} />
    </>
  );
}

export default App;
