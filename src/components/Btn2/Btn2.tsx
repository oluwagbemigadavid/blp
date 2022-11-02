import React from 'react'
import './Btn2.css'
import { useEffect, useState } from 'react';

export const Btn2 = (props: any)  => {
  const [btnState, setBtnState] = useState(false)
  useEffect(() => {    
      document.documentElement.style.setProperty('--color-bt2', props.color);
      document.documentElement.style.setProperty('--bgColor-bt2', props.bgColor);
  }, [])
  return (
    <div className='b__Btn2'>
        <div className="b__Btn2-container">
         <p>{props.text}</p> 
        </div>
    </div>
  )
}
