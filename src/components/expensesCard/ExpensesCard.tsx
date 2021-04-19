import React from 'react'

interface ExpenseCardProps {
  children: React.ReactNode,
  className: string
}


export const ExpensesCard: React.FC<ExpenseCardProps> = ({children, className}) => {
  const classes = className
  return (
    <div className={classes}>
      {children}
    </div>
  )
}
