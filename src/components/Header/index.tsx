import { HeaderContainer } from "./styles";
import HeaderBg from '../../../public/images/header-bg.svg'

export function Header(){
  return(
    <HeaderContainer>
      <img src={HeaderBg} />

    </HeaderContainer>
  )
}