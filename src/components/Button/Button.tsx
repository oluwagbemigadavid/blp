import React from 'react'
import './Button.css'
import { useEffect, useState } from 'react';

export const Button = (props: any)  => {
    const [btnState, setBtnState] = useState(false)
    useEffect(() => {
      //props.bState ? setColor () : console.log('hehe')
      setColor ()
    }, [])
    const setColor = () => {      
        document.documentElement.style.setProperty('--color-btn', props.color);
        document.documentElement.style.setProperty('--bgColor-btn', props.bgColor);
    }
  return (
    <div className='b__Button'>
        <div className="b__Button-container">
         {/*  {props.bState ?
          <p>{props.text}</p> : 
          <p style={{color: `${props.color}`, backgroundColor: `${props.bgColor}`}}>{props.text}</p> 
           }  */}           
           <p>{props.text}</p>
        </div>
    </div>
  )
}
//style={{color: `${props.color}`, backgroundColor: `${props.bgColor}`}}
