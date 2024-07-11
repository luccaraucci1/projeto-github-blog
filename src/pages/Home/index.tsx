import { Header } from "../../components/Header";
import { HomeContainer} from "./styles";
import { UserData } from "../../components/UserData";
import { Posts } from "../../components/Posts";


export function Home(){

  return(
    <HomeContainer>
      <Header />
      <UserData />
      <Posts />
    </HomeContainer>
  )
}