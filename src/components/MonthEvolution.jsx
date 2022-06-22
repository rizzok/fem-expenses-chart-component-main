import styled from '@emotion/styled'

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`
const Value = styled.p`
  font-weight: 700;
`
const Label = styled.p`
  color: var(--medium-brown);
`

const MonthEvolution = () => {
  return (
    <Container>
      <Value>+2.4%</Value>
      <Label>from last month</Label>
    </Container>
  )
}

export default MonthEvolution
