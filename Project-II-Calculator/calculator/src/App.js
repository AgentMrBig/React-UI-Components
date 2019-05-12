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
          <ActionButton buttonStyle={'actionButton'} text='&divide;' />
        </div>
        <div className='firstButtonRow'>
          <NumberButton buttonStyle={'numButton'} text='7' />
          <NumberButton buttonStyle={'numButton'} text='8' />
          <NumberButton buttonStyle={'numButton'} text='9' />
          <ActionButton buttonStyle={'actionButton'} text='	&times;' />
        </div>
        <div className='firstButtonRow'>
          <NumberButton buttonStyle={'numButton'} text='4' />
          <NumberButton buttonStyle={'numButton'} text='5' />
          <NumberButton buttonStyle={'numButton'} text='6' />
          <ActionButton buttonStyle={'actionButton'} text='&minus;' />
        </div>
        <div className='firstButtonRow'>
          <NumberButton buttonStyle={'numButton'} text='4' />
          <NumberButton buttonStyle={'numButton'} text='5' />
          <NumberButton buttonStyle={'numButton'} text='6' />
          <ActionButton buttonStyle={'actionButton'} text='&#43;' />
        </div>
        <div className='firstButtonRow'>
          <NumberButton buttonStyle={'clearButton'} text='0' />
          <ActionButton buttonStyle={'actionButton'} text='&#61;' />
        </div>
      </div>
    </div>
  )
}

export default App
