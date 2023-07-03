import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { id: Math.random().toString(), ...enteredExpenseData };
    props.onAddExpense(expenseData);
  };

  const cancelExpenseHandler = () => {
    setDisplayContent(<button onClick={addExpenseHandler}>New Expense</button>);
  };

  const addExpenseHandler = () => {
    setDisplayContent(
      <ExpenseForm
        onSaveExpenseData={onSaveExpenseDataHandler}
        onCancel={cancelExpenseHandler}
      />
    );
  };

  const [displayContent, setDisplayContent] = useState(
    <button onClick={addExpenseHandler}>New Expense</button>
  );

  return <div className="new-expense">{displayContent}</div>;
}

export default NewExpense;
