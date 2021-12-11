import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import React, { useState } from "react";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("Select Year");

  const selectedYearHandler = (selectYear) => {
    setSelectedYear(selectYear);
  };

  const filteredItems = props.expenses.filter((expense) => {
    if (expense.date.getFullYear().toString() === selectedYear) {
      return expense;
    } else if (selectedYear === "Select Year") {
      return expense;
    }
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelectedYearHandler={selectedYearHandler}
          selected={selectedYear}
        />
        <ExpenseChart expense={filteredItems} />
        <ExpenseList expense={filteredItems} />
      </Card>
    </div>
  );
};

export default Expenses;
