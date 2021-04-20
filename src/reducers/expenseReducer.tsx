import { ExpenseItems } from "../services/expensesService/useExpenseService"


export const expenseReducer = (state: ExpenseItems[] = [], { type, payload }
  : { type: string, payload: ExpenseItems }) => {
  switch (type) {
    case 'addExpense':
      state = [payload,...state]
      break;
    default:
      return state
  }
  return state
}