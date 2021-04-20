import React, { useContext } from 'react'
import { ExpenseAppContext } from '../../contexts/ExpenseAppContext';
import { expenseAction } from '../../reducers/expenseActions';
import { ExpenseForms, NewExpense } from '../expenses-form/ExpenseForms'


export const NewExpenses = () => {
  const ExpenseContext = useContext(ExpenseAppContext)!;
  const {dispatchExpense } = ExpenseContext;
  

  const onSubmittedExpense = (expense:NewExpense) => {
   
    const value = expenseAction('addExpense', expense);
    dispatchExpense(value!)
    console.log(value)
  }
  return (
    <div className="newExpense">
      <ExpenseForms onSubmittedExpense={onSubmittedExpense}></ExpenseForms>
    </div>
  )
}
