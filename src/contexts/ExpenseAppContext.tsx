import React from 'react'
import { createContext } from 'react';
import { ExpenseItems } from '../services/expensesService/useExpenseService'
export const ExpenseAppContext = 
  createContext<{ expenseResults: ExpenseItems[], setExpensesResults: React.Dispatch<React.SetStateAction<ExpenseItems[]>>, useExpenseService: () => { expensesAPI: ExpenseItems[] } } | null>(null);

