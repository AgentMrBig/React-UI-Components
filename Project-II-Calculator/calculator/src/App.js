import React from 'react'
import './App.css'
import './components/ButtonComponents/Button.css'

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { display: 0 }
  }

  render () {
    return (
      <div className='calcContainer'>
        <CalculatorDisplay />
        <div className='buttons'>
          <div className='buttonRow'>
            <NumberButton id='clear' buttonStyle={'clearButton'} text='CLEAR' />
            <ActionButton
              id='divide'
              buttonStyle={'actionButton'}
              text='&divide;'
            />
          </div>
          <div className='buttonRow'>
            <NumberButton id='7' buttonStyle={'numButton'} text='7' />
            <NumberButton id='8' buttonStyle={'numButton'} text='8' />
            <NumberButton id='9' buttonStyle={'numButton'} text='9' />
            <ActionButton
              id='times'
              buttonStyle={'actionButton'}
              text='	&times;'
            />
          </div>
          <div className='buttonRow'>
            <NumberButton id='4' buttonStyle={'numButton'} text='4' />
            <NumberButton id='5' buttonStyle={'numButton'} text='5' />
            <NumberButton id='6' buttonStyle={'numButton'} text='6' />
            <ActionButton
              id='minus'
              buttonStyle={'actionButton'}
              text='&minus;'
            />
          </div>
          <div className='buttonRow'>
            <NumberButton id='1' buttonStyle={'numButton'} text='1' />
            <NumberButton id='2' buttonStyle={'numButton'} text='2' />
            <NumberButton id='3' buttonStyle={'numButton'} text='3' />
            <ActionButton id='add' buttonStyle={'actionButton'} text='&#43;' />
          </div>
          <div className='buttonRow'>
            <NumberButton id='0' buttonStyle={'zeroButton'} text='0' />
            <ActionButton
              id='equal'
              buttonStyle={'actionButton'}
              text='&#61;'
            />
          </div>
        </div>
      </div>
    )
  }
}
