import React from 'react'
import { ExpenseItems } from '../../services/expensesService/useExpenseService'
import { Chart } from '../graphic/Chart'
export interface GraphicPoints {
  label: string,
  value: number
}
export const ExpenseGraphic = ({filteredExpenseResults}:{filteredExpenseResults:ExpenseItems[]}) => {
  const dataGraphicPoints:GraphicPoints[] = [
    {label: 'Jan', value: 0},
    {label: 'Feb', value: 0},
    {label: 'Mar', value: 0},
    {label: 'Apr', value: 0},
    {label: 'May', value: 0},
    {label: 'Jul', value: 0},
    {label: 'Aug', value: 0},
    {label: 'Sep', value: 0},
    {label: 'Oct', value: 0},
    {label: 'Nov', value: 0},
    {label: 'Dec', value: 0},
  ]

  for (const expense of filteredExpenseResults) {
    const expenseMonth = new Date(expense.date).getMonth()
    dataGraphicPoints[expenseMonth].value += Number(expense.price);
  }

  return <Chart dataGraphicPoints={dataGraphicPoints}></Chart>
}
