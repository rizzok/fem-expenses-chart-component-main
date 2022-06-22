import styled from '@emotion/styled'

const Container = styled.div`
  width: 14.28%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
`
const Day = styled.p`
  color: var(--medium-brown);
`

const DayExpense = ({ props }) => {
  // todo: not optimal
  const day = props.day
  const amount = props.amount

  return (
    <Container>
      <p>{amount}</p>
      <Day>{day}</Day>
    </Container>
  )
}

export default DayExpense
