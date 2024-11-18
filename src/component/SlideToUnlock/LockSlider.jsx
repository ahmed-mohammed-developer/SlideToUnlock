import React from 'react'
import './lockSlider.css' // استيراد ملفات CSS للتنسيق

export default function LockSlider({ handelInput, sliderValue, width }) {
  return (
    <input type='range' 
           className='lock' 
           onInput={handelInput} 
           value={sliderValue} 
           style={{ width: !width ? "300px" : width }} // تعيين عرض المنزلق
    />
  )
}
