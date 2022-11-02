import React from 'react'
import art from '../../assets/images/illustration-hero.svg'
import { Btn } from '../Btn/Btn'
import { Btn2 } from '../Btn2/Btn2'
import {Button}  from '../Button/Button'
import Text from '../Text/Text'
import Title from '../Title/Title'
import './Section1.css'

export const Section1 = () => {
  return (
    <div className='b__Section1'>
      <div className="b__Section1-container">
        <div className="b__Section1-container_illustration">
            <img src={art} alt="" />
        </div>
        <div className="b__Section1-container_body section__margin">
            <Title title={"A Simple Bookmark Manager"} color={"#000"} size={'50px'} />
            <Text size={'20px'} color={"#00"} Text={"A clean and simple interface to organize your favourite websites. Open a  new browser tab and see your sites  load instantly. Try it for free."}/>
            <div className="b__Section1-container_body-btns">
                <Btn color={"#fff"} bgColor={'hsl(231, 69%, 60%)'} text={'Get it on Chrome'} bState={true} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Btn2 color={"hsl(229, 31%, 21%)"} bgColor={'rgb(214, 214, 214)'} text={'Get it on Firefox'}  bState={true} />
            </div>
        </div>
      </div>
    </div>
  )
}
