import styled from "styled-components";


export const PostContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${props => props.theme['base-background']};
  max-width: 1366px;
  min-height: 100vh;
  padding: 0 18rem;
`

export const PostInfo= styled.div`
 
  width: 100%;
  padding: 2rem 2.5rem;


  margin-top: -100px;
  background-color: ${props => props.theme['base-profile']};
  border-radius: 10px;
  
  h1{
    margin: 20px 0; 
  }
  

`

export const InfoLinks = styled.div`
  display: flex;
  justify-content: space-between;
  

  a{
    color: ${props => props.theme.blue};
    text-decoration: none;
    font-size: 12px;
    gap: 32px;
  }

  svg{
    margin: 0px 5px;
  }
`

export const PostInfoFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  
  svg{
    color: ${props => props.theme['base-label']}
  }
`
export const PostStat = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const PostContent = styled.div`
  padding: 2rem;

`
