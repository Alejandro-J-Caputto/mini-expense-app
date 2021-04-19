import React from 'react'
import { ExpensesDate } from '../expenses-date/ExpensesDate'
import {ExpenseItems} from '../../services/expensesService/useExpenseService'
import { expenseAction } from '../../reducers/expenseActions'


interface ExpenseItemsAction extends ExpenseItems {
  dispatchExpense:  React.Dispatch<{
    type: string;
    payload: ExpenseItems;
}>
}

export const ExpensesItem:React.FC<ExpenseItemsAction>  = ({date, expense, price, dispatchExpense }) => {

  const clickExpenseItemHandler = (e:React.MouseEvent) => {
    console.log('me clicke desde el item')
    // const value = expenseAction('changeTitle', expense)!;
    // console.log(value)
    // dispatchExpense(value)

  }
  return (
    <div onClick={clickExpenseItemHandler} className="expense-item">
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
