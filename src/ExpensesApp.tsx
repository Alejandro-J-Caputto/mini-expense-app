import React, { useState, useReducer } from 'react'
import { ExpenseAppContext } from './contexts/ExpenseAppContext'
import { MainPage } from './pages/MainPage/MainPage'
import { expenseReducer } from './reducers/expenseReducer'
import { ExpenseItems, useExpenseService } from './services/expensesService/useExpenseService'

export const ExpensesApp = () => {

  // const [expenseResults, setExpensesResults] = useState<ExpenseItems[]>(useExpenseService().expensesAPI)
  const [expenseResults, dispatchExpense] = useReducer(expenseReducer, useExpenseService().expensesAPI)
  return (
    <div>
      <ExpenseAppContext.Provider value={{expenseResults, dispatchExpense, useExpenseService}}>
        <MainPage></MainPage>
      </ExpenseAppContext.Provider>

    </div>
  )
}

