import styled from '@emotion/styled'

const StyledAppHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 32px;
  margin-bottom: 1.5rem;
  border-radius: var(--box-border-radiux);
  background-color: var(--soft-red);
  color: var(--very-pale-orange);
`

const AppHeader = ({ children }) => {
  return <StyledAppHeader>{children}</StyledAppHeader>
}

export default AppHeader
