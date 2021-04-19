import React, { useState } from 'react'
import { ExpenseAppContext } from './contexts/ExpenseAppContext'
import { MainPage } from './pages/MainPage/MainPage'
import { useExpenseService } from './services/expensesService/useExpenseService'

export const ExpensesApp = () => {
  
  const [expenses, setExpenses] = useState(useExpenseService().expenses)

  return (
    <div>
      <ExpenseAppContext.Provider value={{expenses, setExpenses, useExpenseService}}>

        <MainPage></MainPage>

      </ExpenseAppContext.Provider>
      
    </div>
  )
}

