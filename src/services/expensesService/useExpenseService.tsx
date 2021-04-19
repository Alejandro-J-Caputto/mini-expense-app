import React from 'react'

export interface ExpenseItems {
  date: Date,
  expense: string,
  price:number
}


export const useExpenseService = () => {
  //LOAD THE DATA API
  const expensesAPI: ExpenseItems[] = [
    {date: new Date(2019,10,17), expense:'Play Station 5', price: 599},
    {date: new Date(2020,9,11), expense:'Nintendo switch', price: 200},
    {date: new Date(2020,11,18), expense:'SONY Bravia', price: 1200},
    {date: new Date(2021,2,2), expense:'Apple watch', price: 399},
    {date: new Date(2019,6,4), expense:'Iphone', price: 799},
  ]

  
  return {expensesAPI}

}
