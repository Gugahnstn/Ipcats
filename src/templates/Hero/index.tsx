import worldConnection from '../../assets/images/worldconnection.svg';

import { Container } from '../../styles/global';
import * as S from './style';

const Hero = () => {
  return (
    <S.HeroComponent>
      <Container>
        <S.HeroContainer>
          <S.HeroTextContainer>
            <S.HeroTitle>As Informações que você precisa na palma da sua mão.</S.HeroTitle>
            <S.HeroPhrase>Consiga informações de Ips e dominios de um forma simples e eficiente sem demandar tempo e sim de uma forma rápida de conseguir informaçòes, sem problemas para ter o que você quer.</S.HeroPhrase>
          </S.HeroTextContainer>
          <S.HeroImageContainer>
            <S.Image src={worldConnection} alt="Avião viajando em um mundo conectado." />
          </S.HeroImageContainer>
        </S.HeroContainer>
      </Container>
    </S.HeroComponent>
  );
}

export default Hero;