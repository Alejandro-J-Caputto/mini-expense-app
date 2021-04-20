export class ExpenseModel {

  id: number;

  constructor( public date: Date, public expense: string, public price: number) {
    this.date = new Date(date);
    this.expense = expense;
    this.price = price;
    this.id = new Date().getMilliseconds();
  }
}