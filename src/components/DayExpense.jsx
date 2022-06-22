const DayExpense = ({ props }) => {
  // todo: not optimal
  const day = props.day
  const amount = props.amount

  return (
    <div>
      <p>{amount}</p>
      <p>{day}</p>
    </div>
  )
}

export default DayExpense
