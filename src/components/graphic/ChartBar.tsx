import React from 'react'

export const ChartBar = ({value, label, maxValue}:{value:any, label:string, maxValue: any}) => {

  // console.log(value)
  let valueWith = '0%';
  if(maxValue > 0) {
    valueWith = Math.round((value / maxValue * 100)) + '%';
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__content">
        <div style={{height: valueWith}} className="chart-bar__fill">

        </div>
      </div>
        <div className="chart-bar__label">{label}</div>
    </div>
  )
}
