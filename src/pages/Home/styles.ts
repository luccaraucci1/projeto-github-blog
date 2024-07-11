import styled from "styled-components";


export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${props => props.theme['base-background']};
  max-width: 1366px;
  min-height: 100vh;
  padding: 0 18rem;
`

