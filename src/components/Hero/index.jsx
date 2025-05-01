import { Container, SectionContainer } from "../../styles";
import * as S from "./styles";
import down from "../../assets/images/down.png";

const Hero = ({ data, sectionRef, onNavigate }) => {
  return (
    <SectionContainer ref={sectionRef}>
      <S.BackgoundImg image={data.image}>
        <S.Overlay />
        <Container>
          <S.Content>
            <S.Titles1>{data.title1}</S.Titles1>
            <S.TitleName>{data.titleName}</S.TitleName>
            <S.Titles2>{data.title2}</S.Titles2>
            <S.SocialContainer>
              {data.Icon.map((icon, index) => (
                <S.LinkTo key={index} target="_blank" href={icon.href}>
                  <S.SocialIcon src={icon.src} alt={icon.alt} />
                </S.LinkTo>
              ))}
            </S.SocialContainer>
          </S.Content>
          <S.ScrollDownButton onClick={() => onNavigate("about")}>
            <S.ScrollDownImg src={down} alt="scroll down" />
            <S.ScrollDownText>Scroll Down</S.ScrollDownText>
          </S.ScrollDownButton>
        </Container>
      </S.BackgoundImg>
    </SectionContainer>
  );
};

export default Hero;
