import React from 'react'
import './Btn.css'
import { useEffect, useState } from 'react';

export const Btn = (props: any)  => {
  const [btnState, setBtnState] = useState(false)
  useEffect(() => {    
      document.documentElement.style.setProperty('--color-bt', props.color);
      document.documentElement.style.setProperty('--bgColor-bt', props.bgColor);
  }, [])
  return (
    <div className='b__Btn'>
        <div className="b__Btn-container">
         {/*  <p style={{color: `${props.color}`, backgroundColor: `${props.bgColor}`}}>{props.text}</p>   */}    
         <p>{props.text}</p> 
        </div>
    </div>
  )
}
//style={{color: `${props.color}`, backgroundColor: `${props.bgColor}`}}
