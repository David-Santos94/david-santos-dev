import React, { useState } from "react";
import * as S from "./styles";
import * as AppS from "../../styles";

const Projects = ({ data, sectionRef }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <AppS.SectionContainer ref={sectionRef}>
      <S.Content image={data.image}>
        <AppS.Overlay />
        <AppS.Container>
          <AppS.Titles>{data.title}</AppS.Titles>
          <S.ProjectList>
            {data.List.map((project, index) => (
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
