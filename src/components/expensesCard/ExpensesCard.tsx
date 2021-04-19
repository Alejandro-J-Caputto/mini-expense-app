import React from 'react'
import {ExpenseItems} from '../../services/expensesService/useExpenseService'
interface ExpenseCardProps {
  children: React.ReactNode,
  className: string,
  dispatchExpense?:  React.Dispatch<{
    type: string;
    payload: ExpenseItems;
}>
  // setExpensesResults: React.Dispatch<React.SetStateAction<ExpenseItems[]>>
}


export const ExpensesCard: React.FC<ExpenseCardProps> = ({children, className, dispatchExpense }) => {

  

  const classes = className
  const clickItemParentHandler = (e:React.MouseEvent) => {
    const currentElement = e.target as HTMLDivElement
    const expenseElement = currentElement.closest('.expense-item')
    console.log(expenseElement)
  }
  return (
    <div onClick={(e)=> clickItemParentHandler(e) } className={classes}>
      {children}
    </div>
  )
}
