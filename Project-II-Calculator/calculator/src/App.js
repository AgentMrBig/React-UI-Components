import React from 'react'
import './App.css'
import './components/ButtonComponents/Button.css'

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'

const App = () => {
  return (
    <div className='calcContainer'>
      <CalculatorDisplay />
      <div className='buttons'>
        <div className='firstButtonRow'>
          <NumberButton buttonStyle={'clearButton'} text='CLEAR' />
          <NumberButton buttonStyle={'actionButton'} text='&divide;' />
        </div>
      </div>
    </div>
  )
}

export default App
