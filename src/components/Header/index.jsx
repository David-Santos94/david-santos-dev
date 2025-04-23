import * as S from "./styles";

const Header = ({ itemsNav, onNavigate, activeItem }) => {
  const labelsPt = {
    about: "SOBRE",
    projects: "PROJETOS",
    contacts: "CONTATOS",
  };

  return (
    <S.NavContainer solidNav={activeItem !== "home"}>
      <S.Nav>
        {itemsNav.map((item) => (
          <S.Item
            key={item}
            onClick={() => onNavigate(item)}
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
