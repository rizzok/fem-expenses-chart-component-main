import styled from '@emotion/styled'

const Container = styled.div`
  background-color: var(--very-pale-orange);
  padding: 40px;
  border-radius: var(--box-border-radiux);
`

const AppBody = ({ children }) => {
  return <Container>{children}</Container>
}

export default AppBody
