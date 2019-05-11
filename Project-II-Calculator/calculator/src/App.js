import React from 'react'
import './App.css'

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from './components/ButtonComponents/NumberButton'

const App = () => {
  return (
    <div className='calcContainer'>
      <CalculatorDisplay />
      <div className='buttons'>
        <NumberButton buttonStyle={'clearButton'} text='CLEAR' />
      </div>
    </div>
  )
}

export default App
