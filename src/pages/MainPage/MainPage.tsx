import React, { useContext, useEffect } from 'react'

import { ExpenseAppContext } from '../../contexts/ExpenseAppContext'
import { ExpensesItem } from '../../components/expenses-item/ExpensesItem'
import { ExpensesCard } from '../../components/expensesCard/ExpensesCard'
import { NewExpenses } from '../../components/newExpense/NewExpenses'


export const MainPage = () => {
  const ExpenseContext = useContext(ExpenseAppContext)!;
  const { expenseResults, dispatchExpense } = ExpenseContext;

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenseResults));
  }, [expenseResults])

  return (
    <div className="main">
      <ExpensesCard className="container">
        <NewExpenses></NewExpenses>
        {expenseResults.map(({ expense, price, date }) => {
          return <ExpensesItem dispatchExpense={dispatchExpense} key={expense}
            expense={expense}
            price={price}
            date={date}
            ></ExpensesItem>
          })}
      </ExpensesCard>
    </div>
  )
}
