import Hero from "./components/Hero";
import About from "./components/About";
import { GlobalCss, Container } from "./styles";
import { useRef, useState, useEffect, useMemo } from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import JsonData from "./assets/data/data.json";

function App() {
  const [pageData, setPageData] = useState({});
  const [activeSection, setActiveSection] = useState("home");

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  const sectionsRefs = useMemo(
    () => ({
      home: homeRef,
      about: aboutRef,
      skills: skillsRef,
      projects: projectsRef,
      contacts: contactsRef,
    }),
    []
  );

  const sectionsNavBar = Object.keys(sectionsRefs);

  const scrollToSection = (key) => {
    const ref = sectionsRefs[key];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setPageData(JsonData);
  }, []);

  useEffect(() => {
    if (!pageData.Hero) return;

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
  }, [pageData.Hero, sectionsRefs]);

  return (
    <>
      {pageData.Hero ? (
        <>
          <GlobalCss />
          <Header
            itemsNav={sectionsNavBar}
            onNavigate={scrollToSection}
            activeItem={activeSection}
          />
          <Hero
            sectionRef={sectionsRefs.home}
            data={pageData.Hero}
            onNavigate={scrollToSection}
          />
          <About sectionRef={sectionsRefs.about} data={pageData.About} />
          <Skills sectionRef={sectionsRefs.skills} data={pageData.Skills} />
          <Projects
            sectionRef={sectionsRefs.projects}
            data={pageData.Projects}
          />
          <Contacts
            sectionRef={sectionsRefs.contacts}
            data={pageData.Contacts}
          />
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </>
  );
}

export default App;
