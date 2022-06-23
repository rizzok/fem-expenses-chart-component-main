import styled from '@emotion/styled'

const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 30px 0 8px;
  @media screen and (max-width: 480px) {
    margin: 30px 0 0;
  }
`

const MonthlySummary = ({ children }) => {
  return <Container>{children}</Container>
}

export default MonthlySummary
