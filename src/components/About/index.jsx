import React from "react";
import * as S from "./styles";
import { SectionContainer } from "../../styles";

const About = ({ data, sectionRef }) => {
  return (
    <SectionContainer ref={sectionRef}>
      <S.Content>
        <S.Titles>{data.title}</S.Titles>
        <S.ImgPerfil src={data.image} alt="foto de perfil" />
        <S.Text>{data.paragraph}</S.Text>
        <S.DownloadCV href={data.href} target="_blank">
          Download CV
        </S.DownloadCV>
      </S.Content>
    </SectionContainer>
  );
};

export default About;
