import * as S from "./styles";

const Header = ({ itemsNav, onNavigate, activeItem }) => {
  return (
    <S.NavContainer solidNav={activeItem !== "home"}>
      <S.Nav>
        {itemsNav.map((item) => (
          <S.Item
            key={item}
            onClick={() => onNavigate(item)}
            active={activeItem === item}
          >
            {item.toUpperCase()}
          </S.Item>
        ))}
      </S.Nav>
    </S.NavContainer>
  );
};

export default Header;
