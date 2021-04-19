export class ExpenseModel {

  id: number;

  constructor( public date: Date, public expense: string, public price: number) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.id = new Date().getMilliseconds(),
    this.date = date,
    this.expense = expense,
    this.price = price
  }
}