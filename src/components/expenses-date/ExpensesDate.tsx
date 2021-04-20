import React from 'react'

export const ExpensesDate:React.FC <{date: Date}>= ({ date }) => {
  
  const transFormDate = new Date(date)
  const month = transFormDate.toLocaleString('de-CH', { month: 'long' });
  const day = transFormDate.toLocaleString('de-CH', { day: '2-digit' });
  const year = transFormDate.toLocaleString('de-CH', { year: 'numeric'});
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
