import styled from "styled-components";

export const PostsContainer = styled.div`
  margin-top: 4rem;
  width: 100%;

  input{
    display: flex;
    border: 0;
    width: 100%;
    background: ${props => props.theme['base-input']};
    border-radius: 10px;
    margin: 20px 0;
    height: 50px;
    padding: 10px;
    outline: 1px solid ${props => props.theme['base-border']};
    color: ${props => props.theme['base-text']};
    
  }

  

`

export const PostsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  
  
`

export const PostsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
  justify-content: center;
  margin-top: 50px;
`

export const Post = styled.a`
  width: 47.5%;
  text-decoration: none;
  background: ${props => props.theme['base-post']};
  padding: 2rem;
  border-radius: 10px;
  margin: 0;
  color:${props => props.theme['base-subtitle']};

 &:visited{
  text-decoration: none;
 }

 &:hover{
  outline: 2px solid ${props => props.theme['base-label']};
 }
`
export const PostTitle = styled.div`
  display: flex;
  justify-content: space-between;
 
  margin-bottom: 16px;
  gap:30px;

  span{
    
    width: 5rem;
    font-size: 12px;
    color:${props => props.theme['base-span']}
}
`
