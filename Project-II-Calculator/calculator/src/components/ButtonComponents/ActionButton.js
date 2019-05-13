import React from 'react'
import './Button.css'

const ActionButton = props => {
  const actionButtonIds = ['divide', 'times', 'minus', 'add', 'equal']

  var buttonClicked

  // function to reset styles when mouse release, fed to .forEach()
  var resetStyle = (item, index, array) => {
    var curButton = document.getElementById(array[index])
    if (curButton.classList.contains('actionButtonClick')) {
      curButton.classList.remove('actionButtonClick')
    }
  }

  // on mousedown toggle button pressed style
  var buttonDown = e => {
    e.preventDefault()
    buttonClicked = e.target

    if (buttonClicked.classList.contains('actionButton')) {
      buttonClicked.classList.toggle('actionButtonClick')
    }
    console.log('The button was pressed', buttonClicked)
  }

  // on mouseup run forEach on all buttonId's feeding resetStyle function to remove
  // pressed style from all buttons once mouseup fires
  var buttonUp = event => {
    event.preventDefault()

    actionButtonIds.forEach(resetStyle)

    console.log('The button was release', buttonClicked)
  }

  return (
    <div
      id={props.id}
      className={props.buttonStyle || 'actionButton'}
      onMouseDown={buttonDown}
      onMouseUp={buttonUp}
    >
      {props.text || 0}
    </div>
  )
}

export default ActionButton
