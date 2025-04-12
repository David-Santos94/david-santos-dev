import styled from "styled-components";
import { FontFamily } from "../../styles";
import { Colors } from "../../styles";

export const Content = styled.div`
  display: grid;
  height: 100vh;
  grid-template:
    "b a"
    "b c";
  grid-template-rows: 80px 400px;
  grid-template-columns: 55% 45%;
  align-items: center;
  justify-items: center;
  align-content: space-evenly;
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
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

export const Text = styled.p`
  grid-area: c;
  ${FontFamily.loraHero}
  font-size: 18px;
  font-weight: 400;
  color: ${Colors.fonteTerciaria};
  margin: 0 100px;
`;
