import React from 'react'

export const ExpenseFilter = ({onSetYear, filterYear}:{onSetYear:(year: string) => void, filterYear:string}) => {


  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <label>Filter By Year</label>
        <select  value={filterYear} onChange={(e) => onSetYear(e.target.value)}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  )
}
