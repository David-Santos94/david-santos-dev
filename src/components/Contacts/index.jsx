import * as AppS from "../../styles";
import * as S from "./styles";

const Contacts = ({ data, sectionRef }) => {
  return (
    <AppS.SectionContainer ref={sectionRef}>
      <S.Content>
        <AppS.Container>
          <S.Contact>
            <S.ContactDiv>
              <AppS.Titles>{data.title}</AppS.Titles>
              <S.ContactImg>
                <img src={data.image} alt="imagem de perfil" />
              </S.ContactImg>
            </S.ContactDiv>
            <S.ContactDiv>
              {data.Methods.map((contact, index) => (
                <S.ContactMethod
                  key={index}
                  href={contact.href}
                  target="_blank"
                >
                  {contact.title}
                </S.ContactMethod>
              ))}
            </S.ContactDiv>
          </S.Contact>
        </AppS.Container>
      </S.Content>
    </AppS.SectionContainer>
  );
};

export default Contacts;
