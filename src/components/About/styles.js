import styled from "styled-components";
import { FontFamily } from "../../styles";
import { Colors } from "../../styles";

export const Content = styled.div`
  display: grid;
  height: 100vh;
  grid-template:
    "b a"
    "b c"
    "b d";
  grid-template-rows: 80px 400px;
  grid-template-columns: 55% 45%;
  row-gap: 100px;
  align-items: center;
  justify-items: center;

  @media screen and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    row-gap: 0;
    height: 100svh;
  }
`;

export const Titles = styled.h1`
  grid-area: a;
  ${FontFamily.poppinsHero}
  font-size: 48px;
  font-weight: 700;
  color: ${Colors.fonteSecundaria};
  text-align: center;
  margin-top: 100px;

  @media screen and (max-width: 1023px) {
    margin: 0;
  }
`;

export const ImgPerfil = styled.img`
  grid-area: b;
  width: 100%;
  height: 100vh;
  object-fit: cover;

  @media screen and (max-width: 1023px) {
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    filter: brightness(0.4);
  }
`;

export const Text = styled.p`
  grid-area: c;
  ${FontFamily.loraHero}
  font-size: 16px;
  font-weight: 400;
  color: ${Colors.fonteTerciaria};
  margin: 0 100px;

  @media screen and (max-width: 1023px) {
    color: ${Colors.fontePrimaria};
    margin: 0;
    width: 80%;
    font-size: 24px;
  }

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;

export const DownloadCV = styled.a`
  grid-area: d;
  text-decoration: none;
  width: 250px;
  height: 100px;
  border-radius: 10px;
  background-color: ${Colors.bgcolor3};
  ${FontFamily.loraTexts}
  font-size: 32px;
  text-align: center;
  line-height: 100px;
  color: ${Colors.fontePrimaria};
  transition: transform 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
