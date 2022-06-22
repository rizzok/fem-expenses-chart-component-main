import styled from '@emotion/styled'

const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 30px 0 10px;
`

const MonthlySummary = ({ children }) => {
  return <Container>{children}</Container>
}

export default MonthlySummary
