import React, { useReducer } from 'react'
import { ExpenseAppContext } from './contexts/ExpenseAppContext'
import { MainPage } from './pages/MainPage/MainPage'
import { expenseReducer } from './reducers/expenseReducer'
import { useExpenseService } from './services/expensesService/useExpenseService'

export const ExpensesApp = () => {

  const initialExpenses = () => JSON.parse(localStorage.getItem('expenses')!) || [];

  const [expenseResults, dispatchExpense] = useReducer(expenseReducer, useExpenseService().expensesAPI, initialExpenses)
  return (
    <div>
      <ExpenseAppContext.Provider value={{expenseResults, dispatchExpense, useExpenseService}}>
        <MainPage></MainPage>
      </ExpenseAppContext.Provider>

    </div>
  )
}

