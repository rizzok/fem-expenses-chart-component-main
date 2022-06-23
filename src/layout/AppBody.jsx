import styled from '@emotion/styled'

const Container = styled.div`
  background-color: var(--very-pale-orange);
  padding: 32px 40px;
  border-radius: var(--box-border-radiux);

  @media screen and (max-width: 480px) {
    padding: 26px;
  }
`

const AppBody = ({ children }) => {
  return <Container>{children}</Container>
}

export default AppBody
