import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {

  if (props.expense.length === 0) {
    return <ul className="expenses-list__fallback">No Expense Found</ul>;
  }

  return (
    <ul className="expenses-list">
      {props.expense.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
