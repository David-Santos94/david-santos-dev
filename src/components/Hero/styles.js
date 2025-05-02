import styled from "styled-components";
import { FontFamily } from "../../styles";
import { Colors } from "../../styles";

export const BackgoundImg = styled.div`
  position: relative;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Content = styled.div`
  position: relative;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media screen and (max-width: 1023px) {
    height: 94svh;
  }
`;

export const Titles1 = styled.h2`
  ${FontFamily.poppinsHero}
  font-size: 24px;
  font-weight: 700;
  color: ${Colors.fonteSecundaria};
`;

export const Titles2 = styled.h2`
  ${FontFamily.loraHero}
  font-size: 18px;
  font-weight: 400;
  color: ${Colors.fontePrimaria};
`;

export const TitleName = styled.h1`
  ${FontFamily.poppinsHero}
  font-size: 84px;
  font-weight: 700;
  color: ${Colors.fontePrimaria};

  @media screen and (max-width: 1023px) {
    text-align: center;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 16px;
  margin-top: 48px;
`;

export const LinkTo = styled.a`
  text-decoration: none;
  display: inline-block;

  &:hover img {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const SocialIcon = styled.img`
  display: block;
  width: 36px;
  aspect-ratio: 1/1;
  border-radius: 12px;
  transition: transform 0.3s ease;
`;

export const ScrollDownButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: transparent;
  border: none;
  height: 5vh;
  margin: 0 auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const ScrollDownImg = styled.img`
  display: block;
  width: 32px;
  aspect-ratio: 1/1;
  margin-right: 16px;
`;

export const ScrollDownText = styled.span`
  ${FontFamily.poppinsHero}
  font-size: 18px;
  font-weight: 400;
  color: ${Colors.fontePrimaria};
`;
