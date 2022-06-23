import styled from '@emotion/styled'

const Container = styled.div`
  width: 11%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
`
const BarContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  width: 100%;
`
const Bar = styled.div`
  width: 100%;
  height: ${(props) => props.barHeight}%;
  background-color: ${(props) =>
    props.today ? 'var(--cyan)' : 'var(--soft-red)'};
  border-radius: 5px;
  transition: opacity 0.2s;

  &:hover {
    cursor: pointer;
    opacity: 0.8;

    &:before {
      content: '$${(props) => props.amount}';
      position: relative;
      top: -38px;
      left: -11px;
      padding: 8px;
      border-radius: 5px;
      background-color: black;
      color: var(--very-pale-orange);
      font-size: 18px;
      font-weight: 700;
      opacity: 1;
    }
  }
`
const Day = styled.p`
  margin-top: 7px;
  color: var(--medium-brown);
  font-size: 15px;
`

const DayExpense = ({ props, highestWeekExpense, today }) => {
  // todo: not optimal
  const day = props.day
  const amount = props.amount
  const barHeight = Math.round((amount / highestWeekExpense) * 100)

  return (
    <Container>
      <BarContainer>
        <Bar amount={amount} barHeight={barHeight} today={today} />
      </BarContainer>
      <Day>{day}</Day>
    </Container>
  )
}

export default DayExpense
