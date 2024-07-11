import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../../components/Header";
import { InfoLinks, PostContainer, PostContent, PostInfo, PostInfoFooter, PostStat } from "./styles";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Post(){
  return (
      <PostContainer>
        <Header />
        <PostInfo>
          <InfoLinks>
            <a href="#">
              <FontAwesomeIcon icon={faChevronLeft} />
              Voltar
              
            </a>

            <a href="#">

              VER NO GITHUB

              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </InfoLinks>

          <h1>JavaScript data types and data structures</h1>

          <PostInfoFooter>
            <PostStat>
              <FontAwesomeIcon icon={faGithub} /> 
              cameronwill
            </PostStat>
            <PostStat>
              <FontAwesomeIcon icon={faCalendarDay} /> 
              Há 1 dia
            </PostStat>
            <PostStat>
              <FontAwesomeIcon icon={faComment} /> 
              5 comentários
            </PostStat>

          </PostInfoFooter>
        </PostInfo>

        <PostContent>
        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

Dynamic typing
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

          
        </PostContent>
      </PostContainer>
    
  )
}