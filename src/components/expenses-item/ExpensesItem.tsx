import React from 'react'
import { ExpensesDate } from '../expenses-date/ExpensesDate'
import {ExpenseItems} from '../../services/expensesService/useExpenseService'
export const ExpensesItem:React.FC<ExpenseItems>  = ({date, expense, price }) => {
  return (
    <div className="expense-item">
      <ExpensesDate date={date}></ExpensesDate>
      <div className="expense-item__description">
        <h2>{expense}</h2>
      </div>
      <div className="expense-item__price">
        {price}
      </div>
    </div>
  )
}
