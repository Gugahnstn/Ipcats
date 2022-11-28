import WorldConnection from "/public/image/World_Connection.svg";
import * as S from "./style";

const Context = () => {
  return (
    <S.ContextStyle>
      <S.ContextStyleText>
        <S.Title>SITE PARA BUSCA DE IP E DOMINIO.</S.Title>
        <S.Phrase>
          Criado com o intuito de buscar por Ip de maquinas e dominios de sites.
        </S.Phrase>
      </S.ContextStyleText>
      <S.ContextStyleImage>
        <img src={WorldConnection} alt="Imagem representando um mundo conectado" />
      </S.ContextStyleImage>
    </S.ContextStyle>
  );
};

export default Context;
