import styled from "styled-components";
import { Colors, FontFamily } from "../../styles";

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: ${Colors.bgcolor1};
`;

export const Contact = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 150px;
`;

export const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 500px;
`;

export const ContactImg = styled.div`
  width: 230px;
  border-radius: 50%;
  overflow: hidden;
  border: solid 5px ${Colors.bgcolor2};
  margin-top: 64px;

  img {
    width: 80%;
    transform: scale(4);
  }
`;

export const ContactMethod = styled.a`
  text-decoration: none;
  display: inline-block;
  width: 100%;
  height: 38px;
  border: solid 1px black;
  border-radius: 10px;
  box-shadow: 10px 5px 5px black;
  background-color: ${Colors.bgcolor1};
  ${FontFamily.loraTexts}
  color: ${Colors.fonteTerciaria};
  text-align: center;
  font-size: 18px;
  line-height: 38px;
  margin-bottom: 16px;
  transition: transform 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    background-color: ${Colors.bgcolor3};
  }
`;
