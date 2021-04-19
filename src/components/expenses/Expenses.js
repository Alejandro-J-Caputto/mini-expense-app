import React, { useContext } from 'react'
import { ExpenseAppContext } from '../../contexts/ExpenseAppContext'
import { ExpensesItem } from '../expenses-item/ExpensesItem'

export const Expenses = () => {

  const { expenses } = useContext(ExpenseAppContext)

  return (
    <div>
      <h1>hello expenses</h1>
      {expenses.map(({ expense, price, date }) => {
        return <ExpensesItem key={expense}
          expense={expense}
          price={price}
          date={date}
        ></ExpensesItem>
      })}
    </div>
  )
}
