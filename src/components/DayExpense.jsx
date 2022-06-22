import styled from '@emotion/styled'

const Container = styled.div`
  width: 11%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
`
const Bar = styled.div`
  width: 100%;
  height: ${(props) => props.relativePercentage}%;
  background-color: ${(props) =>
    props.today ? 'var(--soft-red)' : 'var(--cyan)'};
  border-radius: 5px;
  transition: opacity 0.2s;

  &:hover {
    cursor: pointer;
    opacity: 0.8;

    &:before {
      content: '$${(props) => props.amount}';
      position: relative;
      top: -42px;
      left: -12px;
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
  margin-top: 5px;
  color: var(--medium-brown);
`

const DayExpense = ({ props, highestWeekExpense, today }) => {
  // todo: not optimal
  const day = props.day
  const amount = props.amount
  const relativePercentage = Math.round((amount / highestWeekExpense) * 100)

  return (
    <Container>
      <Bar amount={amount} relativePercentage={relativePercentage} today />
      <Day>{day}</Day>
    </Container>
  )
}

export default DayExpense
