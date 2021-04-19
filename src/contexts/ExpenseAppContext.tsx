import React from 'react'
import { createContext } from 'react';
import { ExpenseItems } from '../services/expensesService/useExpenseService'

interface ExpenseContextValues {
  expenseResults: ExpenseItems[],
  setExpensesResults: React.Dispatch<React.SetStateAction<ExpenseItems[]>>,
  useExpenseService: () => { expensesAPI: ExpenseItems[] }
}

export const ExpenseAppContext = 
  createContext< ExpenseContextValues | null>(null);

