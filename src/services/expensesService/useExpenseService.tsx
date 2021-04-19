import { ExpenseModel } from "../../classes/expenseModel"

export interface ExpenseItems {
  date: Date,
  expense: string,
  price:number
}


export const useExpenseService = () => {
  //LOAD THE DATA API
  const expensesAPI: ExpenseItems[] = [
    // new ExpenseModel(new Date(2019,10,17),'Play Station 5', 599),
    // new ExpenseModel(new Date(2020,9,11),'Nintendo switch', 200),
    // new ExpenseModel(new Date(2020,11,18),'SONY Bravia', 1200),
    // new ExpenseModel(new Date(2021,2,2),'Apple watch', 399),
    new ExpenseModel(new Date(2019,6,4),'Iphone', 799),
    new ExpenseModel(new Date(2020, 2, 5), 'Macbook Pro', 1200)
  ]
  return {expensesAPI}

}
