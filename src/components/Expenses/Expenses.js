import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import React, { useState } from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2019");

  const selectedYearHandler = (selectYear) => {
    setSelectedYear(selectYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelectedYearHandler={selectedYearHandler}
          selected={selectedYear}
        />
        {props.expenses.map(expense => 
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )}
      </Card>
    </div>
  );
};

export default Expenses;
