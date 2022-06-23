import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
const Label = styled.p`
  color: var(--medium-brown);
`
const Amount = styled.p`
  font-weight: 700;
  font-size: 3rem;
  @media screen and (max-width: 480px) {
    font-size: 2.2rem;
  }
`

const MonthTotal = () => {
  return (
    <Container>
      <Label>Total this month</Label>
      <Amount>$478.33</Amount>
    </Container>
  )
}

export default MonthTotal
