import React from "react";
import * as S from "./styles";
import { Container, SectionContainer } from "../../styles";
import perfil from "../../assets/images/perfil.jpg";

const About = ({ sectionRef }) => {
  return (
    <SectionContainer ref={sectionRef}>
      <S.Content>
        <S.Titles>Sobre Mim</S.Titles>
        <S.ImgPerfil src={perfil} alt="foto de perfil" />
        <S.Text>
          Profissional em evolução na área de desenvolvedor Web Front-end. Prezo
          e me identifico com designs intuitivos e pela usabilidade do usuário,
          com criatividade e muita atenção aos detalhes. Sempre fui apaixonado
          por tecnologia, e desenvolvi habilidades de programação desde que
          comecei a trabalhar na área de manutenção eletroeletrônica. Além das
          habilidades que desenvolvi ao longo da minha carreira como, raciocínio
          lógico e resolução de problemas, interpretação de diagramas e
          esquemas, planejamento e organização, trabalho em equipe, comunicação
          eficaz e gestão de tempo. As quais considero pontos fortes que poderei
          aplicar no desenvolvimento web
        </S.Text>
        <S.DownloadCV
          href="https://drive.google.com/file/d/1YJxtbBBpFQj1WldhIggII0V1R89dDdIS/view?usp=sharing"
          target="_blank"
        >
          Download CV
        </S.DownloadCV>
      </S.Content>
    </SectionContainer>
  );
};

export default About;
