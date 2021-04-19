import { ExpenseItems } from "../services/expensesService/useExpenseService";

export const expenseAction = (type:string, expense:ExpenseItems) => {

  if(type === 'addExpense') {
    return {
      type,
      payload: expense
    }
  } else {
    return 
  }

}