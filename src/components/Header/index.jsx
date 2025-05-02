import { useState } from "react";
import * as S from "./styles";
import menu from "../../assets/images/menu.png";

const Header = ({ itemsNav, onNavigate, activeItem }) => {
  const labelsPt = {
    about: "SOBRE",
    projects: "PROJETOS",
    contacts: "CONTATOS",
  };

  const [active, setActive] = useState(false);
  const ResponsiveMenu = () => {
    setActive(!active);
  };

  return (
    <S.NavContainer solidNav={activeItem !== "home"}>
      <S.Menu
        display={active}
        src={menu}
        alt="menu hamburguer"
        onClick={() => ResponsiveMenu()}
      />
      <S.Nav display={active}>
        {itemsNav.map((item) => (
          <S.Item
            key={item}
            onClick={() => {
              onNavigate(item);
              setActive(false);
            }}
            active={activeItem === item}
          >
            {labelsPt[item] || item.toUpperCase()}
          </S.Item>
        ))}
      </S.Nav>
    </S.NavContainer>
  );
};

export default Header;
