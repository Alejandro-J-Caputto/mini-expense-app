import React from 'react'
import { GraphicPoints } from '../expense-graphic/ExpenseGraphic'
import { ChartBar } from './ChartBar'

export const Chart = ({dataGraphicPoints}:{dataGraphicPoints: GraphicPoints[]}) => {

  const valuesArr = dataGraphicPoints.map(dataP =>{
    return dataP.value
  } )
  const totalMaximun = Math.max(...valuesArr)

  return (
    <div className="chart-container">
      {dataGraphicPoints.map((dataP:any) =>  <ChartBar 
        key={dataP.label} 
        value={dataP.value} 
        maxValue={totalMaximun} 
        label={dataP.label}></ChartBar>)}
    </div>
  )
}
