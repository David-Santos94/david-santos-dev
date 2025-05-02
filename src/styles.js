import styled, { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", serif;
}
`;

export const Colors = {
  fontePrimaria: "#FFFFFF",
  fonteSecundaria: "#F06000",
  fonteTerciaria: "#313131",
  fonteQuaternaria: "#6e6e6e",
  bgcolor1: "#FFFFFF",
  bgcolor2: "#313131",
  bgcolor3: "#F06000",
  bgcolor4: "#E66767",
};

export const FontFamily = {
  poppinsMenu: `
      font-family: "Poppins", sans-serif;
      font-style: normal;
    `,
  poppinsHero: `
      font-family: "Poppins", sans-serif;
      font-style: normal;
    `,
  poppinsTitles: `
      font-family: "Poppins", sans-serif;
      font-style: normal;
    `,
  loraHero: `
      font-family: "Lora", sans-serif;
      font-style: normal;
    `,
  loraTexts: `
      font-family: "Lora", sans-serif;
      font-style: normal;
    `,
};

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  z-index: 1;

  @media screen and (max-width: 1023px) {
    max-width: 80%;
  }

  @media screen and (max-width: 767px) {
    max-width: 90%;
  }
`;

export const SectionContainer = styled.section`
  width: 100%;
  background-color: ${(props) => props.color};
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Titles = styled.h1`
  grid-area: a;
  ${FontFamily.poppinsHero}
  font-size: 48px;
  font-weight: 700;
  color: ${Colors.fonteSecundaria};
  text-align: center;
`;
