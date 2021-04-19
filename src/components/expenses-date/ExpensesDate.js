import React from 'react'

export const ExpensesDate = ({ date }) => {
  const month = date.toLocaleString('de-CH', { month: 'long' });
  const day = date.toLocaleString('de-CH', { day: '2-digit' });
  const year = date.getFullYear();
  return (
    <div>
      <div className="expense-item__date">
        <div className="expense-item__date--month">{month}, </div>
        <div className="expense-item__date--day">{day}</div>
        <div className="expense-item__date--year">{year}</div>
      </div>
    </div>
  )
}
