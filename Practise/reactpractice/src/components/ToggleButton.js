import React from 'react'
import {useState} from 'react'


function ToggleButton() {
  const [visible, setVisible] = useState(true);
  const clickHandler = () => {
    setVisible(!visible)
  }
  const text = visible ? 'on' : 'off'

  return (
    <div>
      Toggle Me!
      <button onClick= {clickHandler}>{text}</button>
    </div>
  )
}

export default ToggleButton