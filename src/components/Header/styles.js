import styled from "styled-components";
import { FontFamily } from "../../styles";
import { Colors } from "../../styles";

export const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 48px;
  z-index: 2;
  background-color: ${({ solidNav }) => (solidNav ? Colors.bgcolor2 : null)};
`;

export const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  height: 100%;
  margin: 0 auto;
  list-style: none;
`;

export const Item = styled.li`
  ${FontFamily.poppinsHero}
  font-size: 16px;
  font-weight: 100;
  color: ${({ active }) =>
    active ? Colors.fonteSecundaria : Colors.fontePrimaria};
  text-shadow: 0px 0px 15px #ffffff;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -4px;
    width: 0%;
    height: 2px;
    background-color: ${Colors.fontePrimaria};
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    cursor: pointer;
  }

  &:hover::after {
    width: 100%;
  }
`;
