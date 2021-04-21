import React, { useContext, useEffect, useState } from 'react'

import { ExpenseAppContext } from '../../contexts/ExpenseAppContext'
import { ExpensesItem } from '../../components/expenses-item/ExpensesItem'
import { ExpensesCard } from '../../components/expensesCard/ExpensesCard'
import { NewExpenses } from '../../components/newExpense/NewExpenses'
import { ExpenseFilter } from '../../components/expense-filter/ExpenseFilter'


export const MainPage = () => {

  const ExpenseContext = useContext(ExpenseAppContext)!;
  const { expenseResults, dispatchExpense } = ExpenseContext;
  const [filterYear, setFilterYear] = useState('2021')

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenseResults));
  }, [expenseResults])

  const filteredExpenseResults = expenseResults.filter(exp => new Date(exp.date).getFullYear() === +filterYear)
  

  const onSetYear = (year: string) => {
    setFilterYear(year);
  }


  return (
    <div className="main">
      <ExpensesCard className="container">
        <ExpenseFilter filterYear={filterYear} onSetYear={onSetYear}></ExpenseFilter>
        <NewExpenses></NewExpenses>
        {!filteredExpenseResults.length ?
        <div className="message-filter">
          <p className="message-filter__notFound"> No expenses registered </p> 
        </div> 
        :filteredExpenseResults.map(({ id, expense, price, date }) => {
          return <ExpensesItem
            dispatchExpense={dispatchExpense}
            key={id}
            expense={expense}
            price={price}
            date={date}
          ></ExpensesItem>
        })
        }
      </ExpensesCard>
    </div>
  )
}
