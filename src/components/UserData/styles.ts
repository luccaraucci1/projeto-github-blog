import styled from "styled-components"

export const UserInfo = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem 2.5rem;
 
  
  margin-top: -100px;
  background-color: ${props => props.theme['base-profile']};
  border-radius: 10px;
  gap: 30px;

  img{
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
  >div{
    width: 100%;
  }

  
`


export const UserTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;


 
  a{
    font-size: 12px;
    text-decoration: none;
    color: ${props => props.theme.blue}
  }
  svg{
    margin-left: 10px;
  }
`

export const UserDescription = styled.div`
  padding: 1rem 0;
  height: 6rem;
  width: 100%;
`

export const UserStats = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  
  svg{
    color: ${props => props.theme['base-label']}
  }
`
export const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`