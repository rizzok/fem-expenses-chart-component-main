import styled from '@emotion/styled'

const Container = styled.div``
const Label = styled.p`
  color: var(--medium-brown);
`
const Amount = styled.p`
  font-weight: 700;
  font-size: 3rem;
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
