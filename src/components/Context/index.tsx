import { ContextStyle, ContextStyleText , ContextStyleImage } from "./style"
import WorldConnection from "./image/World_Connection.svg"

const Context = () => {
  return(
    <ContextStyle>
      <ContextStyleText>
        <h1>SITE PARA BUSCA DE IP E DOMINIO.</h1>
        <p>Criado com o intuito de buscar por Ip de maquinas e dominios de sites.</p>
      </ContextStyleText>
      <ContextStyleImage>
        <img src={WorldConnection} alt="Mundo Conectado"/>
      </ContextStyleImage>
    </ContextStyle>
  );
}

export default Context;