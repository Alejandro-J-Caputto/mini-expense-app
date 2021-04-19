import React, {useContext} from 'react'

import {ExpenseAppContext} from '../../contexts/ExpenseAppContext'
import {ExpensesItem} from '../../components/expenses-item/ExpensesItem'
import { ExpensesCard } from '../../components/expensesCard/ExpensesCard'

export const MainPage = () => {
  const ExpenseContext = useContext(ExpenseAppContext)!;
   const { expenseResults } = ExpenseContext;
  return (
    <div className="main">
      <ExpensesCard className="container">
        {expenseResults.map(({ expense, price, date }) => {
          return <ExpensesItem key={expense}
            expense={expense}
            price={price}
            date={date}
          ></ExpensesItem>
        })}
      </ExpensesCard>
    </div>
  )
}
