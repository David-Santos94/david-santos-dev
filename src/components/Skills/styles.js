import styled from "styled-components";
import { FontFamily } from "../../styles";
import { Colors } from "../../styles";

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: ${Colors.bgcolor2};
`;

export const Titles = styled.h1`
  ${FontFamily.poppinsHero}
  font-size: 48px;
  font-weight: 700;
  color: ${Colors.fonteSecundaria};
  text-align: center;
  margin-bottom: 64px;
`;

export const SkillList = styled.div`
  position: relative;
  width: 600px;
  height: 400px;
  margin: 0 auto;
  overflow: hidden;
`;

export const SkillName = styled.div`
  display: flex;
  width: 100%;
  height: 64px;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.span`
  ${FontFamily.loraTexts}
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: ${Colors.fonteQuaternaria};
  pointer-events: none;
  padding: 0 8px;
`;

export const HighlightName = styled(Name)`
  font-size: 18px;
  color: ${Colors.fontePrimaria};
  background-color: ${Colors.fonteSecundaria};
  pad: 0;
  border-radius: 16px;
  box-shadow: 0px 0px 15px #ffffff;
`;

export const SkillIcon = styled.img`
  position: absolute;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  object-fit: contain;
  opacity: 0.9;
  transition: transform 0.3s ease;
  border-radius: 25%;

  &:hover {
    transform: scale(1.1);
    z-index: 2;
    box-shadow: 0px 0px 15px #ffffff;
  }
`;
