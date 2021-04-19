import React from 'react'
import { ExpensesDate } from '../expenses-date/ExpensesDate'

export const ExpensesItem = ({ expense, price, date }) => {




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
