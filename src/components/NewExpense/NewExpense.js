import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const onSaveExpenseHandler = (enteredExpense) => {
        const expenseData = {
            ...enteredExpense,
            id: Math.random().toString(),
            jamil: 'naeem'
        }

        props.onAddExpense(expenseData)
    }

   

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseHandler} />
        </div>
    )
}

export default NewExpense;