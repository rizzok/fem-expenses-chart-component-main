import styled from '@emotion/styled'

const StyledAppContainer = styled.div`
  width: 540px;
`

const AppContainer = ({ children }) => {
  return <StyledAppContainer>{children}</StyledAppContainer>
}

export default AppContainer
