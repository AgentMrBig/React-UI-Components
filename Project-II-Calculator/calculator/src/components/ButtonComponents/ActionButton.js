import React from 'react'
import './Button.css'

const ActionButton = props => {
  const actionButtonIds = ['divide', 'times', 'minus', 'add', 'equal']

  return (
    <div id={props.id} className={props.buttonStyle || 'actionButton'}>
      {props.text || 0}
    </div>
  )
}

export default ActionButton
