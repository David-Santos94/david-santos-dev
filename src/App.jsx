import Hero from "./components/Hero";
import About from "./components/About";
import { GlobalCss, Container } from "./styles";
import { useRef, useState, useEffect } from "react";
import Header from "./components/Header";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const sectionsRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
  };

  const sectionsNavBar = Object.keys(sectionsRefs);

  const scrollToSection = (key) => {
    const ref = sectionsRefs[key];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("data-section");
            if (sectionId) setActiveSection(sectionId);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px", // Ajuste pra detecção mais intuitiva
        threshold: 0.1,
      }
    );

    Object.entries(sectionsRefs).forEach(([key, ref]) => {
      if (ref.current) {
        ref.current.setAttribute("data-section", key);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <GlobalCss />
      <Header
        itemsNav={sectionsNavBar}
        onNavigate={scrollToSection}
        activeItem={activeSection}
      />
      <Hero sectionRef={sectionsRefs.home} onNavigate={scrollToSection} />
      <About sectionRef={sectionsRefs.about} />
    </>
  );
}

export default App;
