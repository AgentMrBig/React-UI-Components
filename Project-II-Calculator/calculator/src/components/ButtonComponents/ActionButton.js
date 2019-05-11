import React from 'react'
import './Button.css'

const ActionButton = props => {
  //   return <div className='numButton' />

  return (
    <div className={props.buttonStyle || 'actionButton'}>{props.text || 0}</div>
  )
}

export default ActionButton
