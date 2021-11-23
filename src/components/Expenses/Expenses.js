import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import React, { useState } from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("Select Year");

  const selectedYearHandler = (selectYear) => {
    setSelectedYear(selectYear);
  };

  const filteredItems = props.expenses.filter(expense => {
    if(expense.date.getFullYear().toString() === selectedYear) {
      return expense
    } else if (selectedYear === "Select Year") {
      return expense
    }
  })


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelectedYearHandler={selectedYearHandler}
          selected={selectedYear}
        />
        <ExpenseList expense={filteredItems}/>
      </Card>
    </div>
  ); 
};

export default Expenses;
