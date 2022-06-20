import weekExpenses from './data/data.json'
import logo from './images/logo.svg'

function App() {
  console.log(weekExpenses)
  return (
    <div className="App">
      <div>
        <div>
          <p>My balance</p>
          <p>$921.48</p>
        </div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <p>Spending - Last 7 days</p>
        {weekExpenses.map((dayExpense) => (
          <div key={dayExpense.day}>
            <p>{dayExpense.amount}</p>
            <p>{dayExpense.day}</p>
          </div>
        ))}
      </div>
      <hr />
      <div>
        <div>
          <p>Total this month</p>
          <p>$478.33</p>
        </div>
        <div>
          <p>+2.4%</p>
          <p>from last month</p>
        </div>
      </div>
    </div>
  )
}

export default App
