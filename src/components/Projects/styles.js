import styled from "styled-components";
import { Colors, FontFamily } from "../../styles";

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 48px 0;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  @media screen and (max-width: 1023px) {
    height: auto;
  }
`;

export const ProjectList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin-top: 64px;

  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  padding-bottom: 24px;
  width: 344px;
  height: 300px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.3);
    z-index: 1;

    @media screen and (max-width: 1023px) {
      transform: scale(1.3);
    }

    @media screen and (max-width: 767px) {
      transform: scale(1.1);
    }
  }

  &:hover div {
    filter: brightness(0.6);
  }

  @media screen and (max-width: 1023px) {
    width: 444px;
    height: 400px;
  }
  @media screen and (max-width: 767px) {
    width: 344px;
    height: 300px;
  }
`;

export const CardImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.image});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const ButtonLink = styled.a`
  display: inline-block;
  z-index: 1;
  width: 124px;
  height: 32px;
  border-radius: 6px;
  text-decoration: none;
  text-align: center;
  line-height: 32px;
  ${FontFamily.poppinsTitles};
  color: ${Colors.fonteTerciaria};
  background-color: ${Colors.bgcolor3};
  transition: transform 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    color: ${Colors.fontePrimaria};
  }
`;
