import React from 'react'
import './lockSlider.css'


export default function lock({handelInput, sliderValue, width}) {
  return (
    <input type='range'
     className='lock'
      onInput={handelInput}
       value={sliderValue}
       style={{width: !width ? "300px" : width}}
       >
      
    </input>
  )
}
