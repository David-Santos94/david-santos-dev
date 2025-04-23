import React, { useState } from "react";
import * as S from "./styles";
import * as AppS from "../../styles";
import Background from "../../assets/images/fundo_portifolio.jpg";
import efood from "../../assets/images/efood.png";
import tarefas from "../../assets/images/minhas_tarefas.png";
import spiderman from "../../assets/images/spider_man.png";

const Projects = ({ sectionRef }) => {
  const projectData = [
    {
      image: efood,
      hrefLive: "https://efood-ds.vercel.app/",
      hrefCode: "https://github.com/David-Santos94/efood",
    },
    {
      image: tarefas,
      hrefLive: "https://minhas-tarefas-rosy.vercel.app/",
      hrefCode: "https://github.com/David-Santos94/minhas-tarefas",
    },
    {
      image: spiderman,
      hrefLive: "https://spider-man-page-one.vercel.app/",
      hrefCode: "https://github.com/David-Santos94/spider_man_page",
    },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <AppS.SectionContainer ref={sectionRef}>
      <S.Content image={Background}>
        <AppS.Overlay />
        <AppS.Container>
          <AppS.Titles>Projetos</AppS.Titles>
          <S.ProjectList>
            {projectData.map((project, index) => (
              <S.Card
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <S.CardImage image={project.image} />
                {hoveredCard === index ? (
                  <>
                    <S.ButtonLink href={project.hrefLive} target="_blank">
                      Live
                    </S.ButtonLink>
                    <S.ButtonLink href={project.hrefCode} target="_blank">
                      Code
                    </S.ButtonLink>
                  </>
                ) : null}
              </S.Card>
            ))}
          </S.ProjectList>
        </AppS.Container>
      </S.Content>
    </AppS.SectionContainer>
  );
};

export default Projects;
