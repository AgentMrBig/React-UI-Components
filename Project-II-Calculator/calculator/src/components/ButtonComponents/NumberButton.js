import React from 'react'
import './Button.css'

const NumberButton = props => {
  const numberButtonIds = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  // set active button only button able to be modified
  // if this is not done, strange things can happen when click and hold mouse,
  // moving to another button and release mouse will toggle style on more than one button,
  // giving impression of buttons getting "stuck"

  var buttonClicked

  var resetStyle = (item, index, array) => {
    var curButton = document.getElementById(index)
    if (curButton.classList.contains('buttonClick')) {
      curButton.classList.remove('buttonClick')
    }
    if (curButton.classList.contains('bigButtonClick')) {
      curButton.classList.remove('bigButtonClick')
    }
  }

  var buttonDown = e => {
    e.preventDefault()
    buttonClicked = e.target

    if (buttonClicked.classList.contains('zeroButton')) {
      buttonClicked.classList.toggle('bigButtonClick')
    } else if (buttonClicked.classList.contains('clearButton')) {
      buttonClicked.classList.toggle('bigButtonClick')
    } else {
      buttonClicked.classList.toggle('buttonClick')
    }
    console.log('The button was pressed', buttonClicked.id)
  }

  var buttonUp = event => {
    event.preventDefault()
    // var buttonRelease = document.getElementById(buttonClicked.id)

    if (!mouseDown) {
      console.log('RELEASED')
    }

    numberButtonIds.forEach(resetStyle)

    console.log('The button was release', buttonClicked)
  }

  // keep track of mouse down state, in the event a button is pressed, mouse moved over
  // another button before being release, will cause unwanted class toggling
  // we keep track of the mouse here so that no matter what if the mouse is not down
  // will toggle off the class for styling buttons pressed by checking if(!mouseDown){
  // remove pressed button style}
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
