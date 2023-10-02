import Logo from "../../assets/images/Logo.svg";
import BohrLogo from  "../../assets/images/bohr.svg";
import GithubLogo from "../../assets/images/github.svg";

import * as S from "./style"

const Footer = () => {
  return (
    <S.FooterComponent>
      <S.FooterTopComponent>
        <img src={Logo} alt="Logo do Ipcats" />
        <S.IconsComponent>
          <S.Links>
            <S.Icons src={ BohrLogo } alt="logo do bohr.io"/>
          </S.Links>
          <S.Links>
            <S.Icons src={ GithubLogo } alt="logo do Github" />
          </S.Links>
        </S.IconsComponent>
      </S.FooterTopComponent>
      <S.FooterBottomComponent>
        <p>Direitos Reservados</p>
      </S.FooterBottomComponent>
    </S.FooterComponent>
  )
}

export default Footer