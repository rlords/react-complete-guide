import ExpenseItem from './ExpenseItem';
import Card from './Card';

import './Expenses.css'

function Expenses(props) {
    return (
        <Card className="expenses">
            {props.expenses.map(ex => {
               return <ExpenseItem title={ex.title} amount={ex.amount} date={ex.date}/>
            })};
        </Card>
    )
}

export default Expenses