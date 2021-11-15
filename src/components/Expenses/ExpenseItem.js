import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';


const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)

  const clickedHandler = () => {
    setTitle('Nice dude nice!')
  }

  return (
    <div className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">{props.amount}</div>
            <button onClick={clickedHandler}>Click me!</button>
        </div>
    </div>
  );
}

export default ExpenseItem;
