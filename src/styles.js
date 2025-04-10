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
  bgcolor3: "#FFEBD9",
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
`;

export const SectionContainer = styled.section`
  width: 100%;
  background-color: ${(props) => props.color};
`;
