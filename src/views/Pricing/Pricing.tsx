import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer';
import './Pricing.css'
import Text from '../../components/Text/Text'
import Title from '../../components/Title/Title'
import { Item } from './Item'
import chrome from '../../assets/images/logo-chrome.svg'
import firefox from '../../assets/images/logo-firefox.svg'
import opera from '../../assets/images/logo-opera.svg'

export const Pricing = () => {

  const { ref, inView: view } = useInView();
  const [prod, setProd] = useState([
    {
      id: 1,
      img: chrome,
      title: "Add to Chrome",
      version: "Minimum version 62"
    },
    {
      id: 2,
      img: firefox,
      title: "Add to Firefox",
      version: "Minimum version 55"
    },
    {
      id: 3,
      img: opera,
      title: "Add to Opera",
      version: "Minimum version 46"
    },
  ])
  return (
    <div className='b__Pricing'>
      <div className="b__Pricing-container">
        <div className="b__Pricing-container-heading">
            <Title title={"Download the extension"} color={"#000"} size={'30px'} />
            <br />
            <Text size={'20px'} color={"#000"} Text={"We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to priortize."} />
        </div>
        <div className={`b__Pricing-container_contents ${view ? 'show' : ''}`}  ref={ref}>          
          {prod.map((product) => (
            <Item key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </div>
  )
}
