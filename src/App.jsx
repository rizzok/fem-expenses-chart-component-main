import weekExpenses from './data/data.json'
import './basestyle.css'
import AppContainer from './layout/AppContainer'
import AppHeader from './layout/AppHeader'
import AppBody from './layout/AppBody'
import Balance from './components/Balance'
import Logo from './components/Logo'
import WeekExpenses from './layout/WeekExpenses'
import DayExpense from './components/DayExpense'
import MonthlySummary from './layout/MonthlySummary'
import MonthTotal from './components/MonthTotal'
import MonthEvolution from './components/MonthEvolution'
import Separator from './components/Separator'

function App() {
  return (
    <AppContainer>
      <AppHeader>
        <Balance />
        <Logo />
      </AppHeader>
      <AppBody>
        <WeekExpenses>
          {weekExpenses.map((dayExpense) => (
            <DayExpense key={dayExpense.day} props={dayExpense} />
          ))}
        </WeekExpenses>
        <Separator />
        <MonthlySummary>
          <MonthTotal />
          <MonthEvolution />
        </MonthlySummary>
      </AppBody>
    </AppContainer>
  )
}

export default App
