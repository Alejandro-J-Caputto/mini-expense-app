import React, { useState } from 'react'
import { ExpenseAppContext } from './contexts/ExpenseAppContext'
import { MainPage } from './pages/MainPage/MainPage'
import { ExpenseItems, useExpenseService } from './services/expensesService/useExpenseService'

export const ExpensesApp = () => {

  const [expenseResults, setExpensesResults] = useState<ExpenseItems[]>(useExpenseService().expensesAPI)

  return (
    <div>
      <ExpenseAppContext.Provider value={{expenseResults, setExpensesResults, useExpenseService}}>
        <MainPage></MainPage>
      </ExpenseAppContext.Provider>

    </div>
  )
}

