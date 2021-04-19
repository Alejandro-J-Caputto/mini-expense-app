import React, { useContext } from 'react'
import { ExpensesItem } from '../../components/expenses-item/ExpensesItem'
import { Expenses } from '../../components/expenses/Expenses'
import { ExpenseAppContext } from '../../contexts/ExpenseAppContext'

export const MainPage = () => {



  return (
      <div className="main">
        <div className="container">
          <Expenses></Expenses>
        </div>
      </div>
  )
}
