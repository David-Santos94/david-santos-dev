import styled from "styled-components";
import { FontFamily } from "../../styles";
import { Colors } from "../../styles";

export const Content = styled.div`
  display: grid;
  height: 100vh;
  grid-template:
    "a a a"
    "b c c";
  align-items: center;
  justify-items: center;
  align-content: space-evenly;
  grid-template-rows: 80px 400px;
`;

export const Titles = styled.h1`
  grid-area: a;
  ${FontFamily.poppinsHero}
  font-size: 48px;
  font-weight: 700;
  color: ${Colors.fonteSecundaria};
  text-align: center;
`;

export const ImgPerfil = styled.img`
  grid-area: b;
  width: 350px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 10px solid ${Colors.bgcolor3};
  object-fit: cover;
  object-position: center;
`;

export const Text = styled.p`
  grid-area: c;
  ${FontFamily.loraHero}
  font-size: 18px;
  font-weight: 400;
  color: ${Colors.fonteTerciaria};
  margin: 0 100px;
`;
