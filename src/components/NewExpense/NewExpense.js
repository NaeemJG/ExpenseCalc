import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import React, { useState } from "react";

const NewExpense = (props) => {
    const [isEditing, setEditing] = useState(false);

    const onSaveExpenseHandler = (enteredExpense) => {
        const expenseData = {
            ...enteredExpense,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData)
        setEditing(false);
    }

    const showFormHandler = () => {
        setEditing(true)
    }

    const hideFormHandler = () => {
        setEditing(false)
    }



    return (
        <div className="new-expense">
            {!isEditing && <button onClick={showFormHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseHandler} onCancel={hideFormHandler}/>}
        </div>
    )
}

export default NewExpense;