import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <ExpenseItem date={new Date()} title="Expense Item 1" amount="123.56"/>
    </div>
  );
}

export default App;
