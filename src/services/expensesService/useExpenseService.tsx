
export interface ExpenseItems {
  id?: number
  date: Date,
  expense: string,
  price:number
}


export const useExpenseService = () => {
  //LOAD THE DATA API
  const expensesAPI: ExpenseItems[] = []
  return {expensesAPI}

}
