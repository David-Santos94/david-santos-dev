import * as AppS from "../../styles";
import * as S from "./styles";
import perfil from "../../assets/images/perfil.jpg";

const Contacts = ({ sectionRef }) => {
  return (
    <AppS.SectionContainer ref={sectionRef}>
      <S.Content>
        <AppS.Container>
          <S.Contact>
            <S.ContactDiv>
              <AppS.Titles>Meus Contatos</AppS.Titles>
              <S.ContactImg>
                <img src={perfil} alt="imagem de perfil" />
              </S.ContactImg>
            </S.ContactDiv>
            <S.ContactDiv>
              <S.ContactMethod href="tel:+351914036528" target="_blank">
                Telefone
              </S.ContactMethod>
              <S.ContactMethod
                href="https://wa.me/351914036528"
                target="_blank"
              >
                WhatsApp
              </S.ContactMethod>
              <S.ContactMethod
                href="mailto:david.marlon94@gmail.com"
                target="_blank"
              >
                Email
              </S.ContactMethod>
              <S.ContactMethod
                href="https://www.linkedin.com/in/david-marlon-dos-santos/"
                target="_blank"
              >
                Linkedin
              </S.ContactMethod>
            </S.ContactDiv>
          </S.Contact>
        </AppS.Container>
      </S.Content>
    </AppS.SectionContainer>
  );
};

export default Contacts;
