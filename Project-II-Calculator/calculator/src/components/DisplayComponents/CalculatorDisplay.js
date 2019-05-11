import React from 'react'
import './Display.css'

const CalculatorDisplay = props => {
  return (
    <div className={props.buttonStyle || 'calcDisplay'}>{props.text || 0} </div>
  )
}

export default CalculatorDisplay
