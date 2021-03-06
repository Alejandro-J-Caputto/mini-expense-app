import { useState } from 'react';
import { ExpenseModel } from '../../classes/expenseModel';
import { useForm, Validatable } from '../../hooks/useForm';
export interface ExpenseForm {
  expense: string,
  date: Date,
  price: number
}
export interface NewExpense {
  id: number
  expense: string,
  date: Date,
  price: number
}
export const ExpenseForms = ({ onSubmittedExpense }: { onSubmittedExpense: (expenseForm: NewExpense) => void }) => {

  const { formValues, handleInputChange, reset, customValidator } = useForm<ExpenseForm>({ expense: '', date: new Date(), price: 0.1 })
  const { expense, date, price } = formValues;
  const [hideForm, setHideForm] = useState(true)

  const buttonFormHandler =<div className="expense-form__action expense-form__action--menu"><button onClick={()=> setHideForm(false)} className="btn btn--expense-form btn--expense--menu"> Add Expense </button></div> 

  const expenseIsValid: Validatable = {
    value: expense,
    required: true,
    minLength: 3
  }
  const priceIsValid: Validatable = {
    value: price,
    required: true,
    min: 0.1
  }
  const dateIsValid: Validatable = {
    value: date,
    required: true
  }
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('me submité patata');
    if (!customValidator(expenseIsValid) || !customValidator(priceIsValid) || !customValidator(dateIsValid)) return alert('Field no valido')

    const newExpense = new ExpenseModel(new Date(date), expense, price)
    onSubmittedExpense(newExpense);

    reset()
  }


  return (

    <form onSubmit={submitHandler} className="expense-form">
      {hideForm ? buttonFormHandler :
      <div className="expense-form__controls">
      <div className="expense-form__control">
        <label htmlFor="expense">Title</label>
        <input
          name='expense'
          value={expense}
          onChange={handleInputChange}
          placeholder="Expense"
          id="expense"
          type="text" />
      </div>
      <div className="expense-form__control">
        <label htmlFor="price">Amount</label>
        <input
          id="price"
          value={price}
          name="price"
          onChange={handleInputChange}
          placeholder="Amount"
          type="number"
          min="0.01"
          step="0.01" />
      </div>
      <div className="expense-form__control">
        <label htmlFor="date">Date</label>
        <input
          id="date"
          value={(typeof date !== 'string') ? `${date.getFullYear()}-${date.toLocaleString('de-CH', { month: '2-digit'})}-${date.toLocaleString('de-CH', {day: '2-digit'})}` : date }
          name="date"
          onChange={handleInputChange}
          type="date"
          min="2019-01-01"
          max="2022-12-31" />
      </div>
      <div className="expense-form__action">
        <button className="btn btn--expense-form" type="submit"> Add </button>
        <button onClick={()=>setHideForm(true)} className="btn btn--expense-form btn--expense-form--cancel"> Cancel </button>
      </div>
    </div>
      }
      
    </form>
  )
}
