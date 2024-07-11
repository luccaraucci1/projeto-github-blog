import { Post,PostsContainer, PostsHeader, PostsList, PostTitle, } from "./styles";

export function Posts(){


  return(
    <PostsContainer>
      <PostsHeader>
        <h3>Publicações</h3>
        <span>3 publicações</span>
      </PostsHeader>

      <input type="text" placeholder="Buscar Conteúdo" />
      
      <PostsList>
 
          <Post href="#">
            <PostTitle>
            <h2>JavaScript data types and data structures</h2>
            <span>Há 1 dia</span>
            </PostTitle>
            <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...</p>

          </Post>


        
          <Post href="#">
            <PostTitle>
            <h2>JavaScript data types and data structures</h2>
            <span>Há 11 Meses</span>
            </PostTitle>
            <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...</p>
          </Post>

          
      </PostsList>
  
    </PostsContainer>
  )
}