import { useState } from "react";
import { Colors, Container, SectionContainer } from "../../styles";
import * as S from "./styles";

const Skills = ({ data, sectionRef }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <SectionContainer ref={sectionRef}>
      <S.Content>
        <Container>
          <S.Titles>{data.title}</S.Titles>
          <S.SkillList>
            {data.Icon.map((icon, index) => (
              <S.SkillIcon
                key={index}
                src={icon.src}
                x={icon.x}
                y={icon.y}
                size={icon.size}
                alt={icon.name}
                onMouseEnter={() => setHoveredSkill(icon.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              />
            ))}
          </S.SkillList>
          <S.SkillName>
            {data.Icon.map((icon, index) =>
              hoveredSkill === icon.name ? (
                <S.HighlightName key={index}>{icon.name}</S.HighlightName>
              ) : (
                <S.Name key={index}>{icon.name}</S.Name>
              )
            )}
          </S.SkillName>
        </Container>
      </S.Content>
    </SectionContainer>
  );
};

export default Skills;
