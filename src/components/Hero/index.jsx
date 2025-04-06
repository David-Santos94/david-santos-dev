import { Container, SectionContainer } from "../../styles";
import * as S from "./styles";
import hero from "../../assets/images/hero_bkg.jpg";
import github from "../../assets/images/Github-bk.png";
import linkedin from "../../assets/images/Linkedin-bk.png";
import instagram from "../../assets/images/Instagram-bk.png";
import down from "../../assets/images/down.png";

const Hero = () => {
  return (
    <SectionContainer>
      <S.BackgoundImg image={hero}>
        <S.Overlay />
        <Container>
          <S.Content>
            <S.Titles1>HELLO, WORLD.</S.Titles1>
            <S.TitleName>I'm David Santos.</S.TitleName>
            <S.Titles2>| FRONT-END DEVELOPER |</S.Titles2>
            <S.SocialContainer>
              <S.LinkTo
                target="_blank"
                href="https://github.com/David-Santos94"
              >
                <S.SocialIcon src={github} alt="icone github" />
              </S.LinkTo>
              <S.LinkTo
                target="_blank"
                href="https://www.linkedin.com/in/david-marlon-dos-santos/"
              >
                <S.SocialIcon src={linkedin} alt="icone linkedin" />
              </S.LinkTo>
              <S.LinkTo
                target="_blank"
                href="https://www.instagram.com/dmarlon94/"
              >
                <S.SocialIcon src={instagram} alt="icone instagram" />
              </S.LinkTo>
            </S.SocialContainer>
          </S.Content>
          <S.ScrollDownContainer>
            <S.LinkTo>
              <S.ScrollDownImg src={down} alt="scroll down" />
            </S.LinkTo>
            <S.LinkTo>
              <S.ScrollDownText>Scroll Down</S.ScrollDownText>
            </S.LinkTo>
          </S.ScrollDownContainer>
        </Container>
      </S.BackgoundImg>
    </SectionContainer>
  );
};

export default Hero;
