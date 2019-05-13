import React from 'react'
import './Button.css'

const NumberButton = props => {
  // array of button id's so I can loop through all buttons and remove the button
  // press style from all buttons when button is released, this gets over style errors
  // where it appears the buttons get stuck in pressed state.
  const numberButtonIds = [
    'clear',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
  ]

  var buttonClicked

  // function to reset styles when mouse release, fed to .forEach()
  var resetStyle = (item, index, array) => {
    var curButton = document.getElementById(array[index])
    if (curButton.classList.contains('buttonClick')) {
      curButton.classList.remove('buttonClick')
    }
    if (curButton.classList.contains('bigButtonClick')) {
      curButton.classList.remove('bigButtonClick')
    }
  }

  // on mousedown toggle button pressed style
  var buttonDown = e => {
    e.preventDefault()
    buttonClicked = e.target

    if (
      buttonClicked.classList.contains('zeroButton') ||
      buttonClicked.classList.contains('clearButton')
    ) {
      buttonClicked.classList.toggle('bigButtonClick')
    } else {
      buttonClicked.classList.toggle('buttonClick')
    }
    // console.log('The button was pressed', buttonClicked)
  }

  // on mouseup run forEach on all buttonId's feeding resetStyle function to remove
  // pressed style from all buttons once mouseup fires
  var buttonUp = event => {
    event.preventDefault()

    // if (!mouseDown) {
    //   console.log('RELEASED')
    // }

    numberButtonIds.forEach(resetStyle)

    // console.log('The button was release', buttonClicked)
  }

  // testing setting mouseDown as a 1 or 0, true or false
  var mouseDown = 0

  document.body.onmousedown = function () {
    ++mouseDown
  }
  document.body.onmouseup = function () {
    --mouseDown
  }

  return (
    <div
      id={props.id}
      className={props.buttonStyle || 'numButton'}
      onMouseDown={buttonDown}
      onMouseUp={buttonUp}
    >
      {props.text || 0}
    </div>
  )
}

export default NumberButton
