import ExpenseItem from './ExpenseItem';

import './Expenses.css'

function Expenses(props) {
    return (
        <div className="expenses">
            {props.expenses.map(ex => {
               return <ExpenseItem title={ex.title} amount={ex.amount} date={ex.date}/>
            })};
        </div>
    )
}

export default Expenses