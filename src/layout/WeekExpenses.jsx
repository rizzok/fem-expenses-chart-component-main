import styled from '@emotion/styled'

const Container = styled.div``
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`
const DaysContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4rem 0 2rem;
  height: 175px;
`

const WeekExpenses = ({ children }) => {
  return (
    <Container>
      <Title>Spending - Last 7 days</Title>
      <DaysContainer>{children}</DaysContainer>
    </Container>
  )
}

export default WeekExpenses
