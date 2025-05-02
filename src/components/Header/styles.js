import styled from "styled-components";
import { FontFamily } from "../../styles";
import { Colors } from "../../styles";

export const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 48px;
  z-index: 2;
  background-color: ${({ solidNav }) => (solidNav ? Colors.bgcolor2 : null)};

  @media screen and (max-width: 1023px) {
    width: 20%;
    background-color: transparent;
  }
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

  @media screen and (max-width: 1023px) {
    display: ${({ display }) => (display ? "flex" : "none")};
    width: fit-content;
    height: auto;
    padding: 5px;
    margin-left: 12px;
    flex-direction: column;
    background-color: ${Colors.bgcolor2};
    border-radius: 5px;
  }
`;

export const Menu = styled.img`
  display: none;
  width: 48px;
  margin: 12px;
  background-color: ${Colors.bgcolor1};
  border-radius: 5px;

  @media screen and (max-width: 1023px) {
    display: block;
  }
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

  @media screen and (max-width: 1023px) {
    font-size: 18px;
  }
`;
