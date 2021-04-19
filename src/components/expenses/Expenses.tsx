import React, { useContext } from 'react'
import { ExpenseAppContext } from '../../contexts/ExpenseAppContext'
import { ExpensesItem } from '../expenses-item/ExpensesItem'

export const Expenses: React.FC = () => {

  const ExpenseContext = useContext(ExpenseAppContext)!;
  const { expenseResults } = ExpenseContext;

  console.log(expenseResults)
  return (
    <div>
      <h1>hello expenses</h1>
      {expenseResults.map(({ expense, price, date }) => {
        return <ExpensesItem key={expense}
          expense={expense}
          price={price}
          date={date}
        ></ExpensesItem>
      })}
    </div>
  )
}
