import styled from '@emotion/styled'

const StyledAppHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  margin-bottom: 1.5rem;
  border-radius: 20px;
  background-color: var(--soft-red);
  color: var(--very-pale-orange);
`

const AppHeader = ({ children }) => {
  return <StyledAppHeader>{children}</StyledAppHeader>
}

export default AppHeader
