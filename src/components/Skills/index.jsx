import { useState } from "react";
import { Colors, Container, SectionContainer } from "../../styles";
import * as S from "./styles";

const Skills = ({ sectionRef }) => {
  const iconData = [
    {
      src: "https://skillicons.dev/icons?i=css&theme=dark",
      x: 50,
      y: 30,
      size: 80,
      name: "Css",
    },
    {
      src: "https://skillicons.dev/icons?i=html&theme=dark",
      x: 110,
      y: 90,
      size: 70,
      name: "Html",
    },
    {
      src: "https://skillicons.dev/icons?i=js&theme=dark",
      x: 250,
      y: 40,
      size: 100,
      name: "Javascript",
    },
    {
      src: "https://skillicons.dev/icons?i=react&theme=dark",
      x: 160,
      y: 10,
      size: 90,
      name: "React",
    },
    {
      src: "https://skillicons.dev/icons?i=git&theme=dark",
      x: 440,
      y: 15,
      size: 50,
      name: "Git",
    },
    {
      src: "https://skillicons.dev/icons?i=github&theme=dark",
      x: 500,
      y: 20,
      size: 80,
      name: "Github",
    },
    {
      src: "https://skillicons.dev/icons?i=gulp&theme=dark",
      x: 350,
      y: 90,
      size: 70,
      name: "Gulp",
    },
    {
      src: "https://skillicons.dev/icons?i=jest&theme=dark",
      x: 190,
      y: 150,
      size: 60,
      name: "Jest",
    },
    {
      src: "https://skillicons.dev/icons?i=jquery&theme=dark",
      x: 400,
      y: 200,
      size: 60,
      name: "Jquery",
    },
    {
      src: "https://skillicons.dev/icons?i=sass&theme=dark",
      x: 300,
      y: 250,
      size: 80,
      name: "Sass",
    },
    {
      src: "https://skillicons.dev/icons?i=bootstrap&theme=dark",
      x: 60,
      y: 170,
      size: 90,
      name: "Bootstrap",
    },
    {
      src: "https://skillicons.dev/icons?i=vuejs&theme=dark",
      x: 450,
      y: 100,
      size: 70,
      name: "Vuejs",
    },
    {
      src: "https://skillicons.dev/icons?i=figma&theme=dark",
      x: 370,
      y: 20,
      size: 70,
      name: "Figma",
    },
    {
      src: "https://skillicons.dev/icons?i=cypress&theme=light",
      x: 490,
      y: 150,
      size: 90,
      name: "Cypress",
    },
    {
      src: "https://skillicons.dev/icons?i=typescript&theme=dark",
      x: 300,
      y: 140,
      size: 90,
      name: "Typescript",
    },
    {
      src: "https://skillicons.dev/icons?i=vercel&theme=dark",
      x: 200,
      y: 200,
      size: 90,
      name: "Vercel",
    },
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);

  //   "css",
  //   "html",
  //   "javascript",
  //   "react",
  //   "git",
  //   "github",
  //   "gulp",
  //   "jest",
  //   "jquery",
  //   "sass",
  //   "bootstrap",
  //   "vuejs",
  //   "cypress",
  //   "figma",
  //   "typescript",
  //   "vercel",

  return (
    <SectionContainer ref={sectionRef}>
      <S.Content>
        <Container>
          <S.Titles>My Skills</S.Titles>
          <S.SkillList>
            {iconData.map((icon, index) => (
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
            {iconData.map((icon, index) =>
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
