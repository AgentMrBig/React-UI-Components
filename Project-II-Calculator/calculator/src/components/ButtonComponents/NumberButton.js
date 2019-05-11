import React from 'react'
import './Button.css'

const NumberButton = props => {
  //   return <div className='numButton' />

  return (
    <div className={props.buttonStyle || 'numButton'}>{props.text || 0}</div>
  )
}

export default NumberButton
