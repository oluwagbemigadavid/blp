import React from 'react'
import { Btn } from '../../components/Btn/Btn'
import Text from '../../components/Text/Text'
import Title from '../../components/Title/Title'
import './Item.css'

export const Item = (props: any) => {
  return (
    <div className='b__Item'>
      <div className="b__Item-container">
        <img src={props.product.img} alt={props.product.title} />
        <div className="b__Pricing-container-heading">
          <Title title={props.product.title} color={"#000"} size={'25px'} />
          <Text size={'18px'} color={"#000"} Text={props.product.version} />
        </div>
        <span> </span>
        <Btn color={"#fff"} bgColor={'hsl(231, 69%, 60%)'} text={'Add & Install Extension'} bState={true} />
      </div>
    </div>
  )
}
