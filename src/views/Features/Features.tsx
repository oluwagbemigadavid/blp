import React, {useState, useEffect} from 'react'
import { Btn } from '../../components/Btn/Btn'
import Text from '../../components/Text/Text'
import Title from '../../components/Title/Title'
import sb from '../../assets/images/illustration-features-tab-1.svg'
import ss from '../../assets/images/illustration-features-tab-2.svg'
import es from '../../assets/images/illustration-features-tab-3.svg'
import './Features.css'

export const Features = () => {
  const [varState, setVar] = useState(1)
  const [eName, setEName] = useState('b__featues-container_contents')
  const setFeat = () => {
    if( varState === 1 ) {
      setEName('')
    } else if ( varState === 2 ) {
      setEName('feature2')
    } else if ( varState === 3 ) {
      setEName('feature3')
    }
  }
    
  
  return (
    <div className='b__features'>
      <div className="b__features-container">
        <div className="b__features-container-heading">
            <Title title={"Features"} color={"#000"} size={'30px'} />
            <br />
            <Text size={'20px'} color={"#000"} Text={"Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."} />
        </div>
        <div className="b__features-container-titles">
          <hr />
          <span onClick={() => setVar(1)}> <p className={`b__features-conatiner-title ${varState === 1 ? 'active' : ''}`}  onClick={setFeat}>Simple Bookmarking</p></span> 
          <span onClick={() => setVar(2)}> <p className={`b__features-conatiner-title ${varState === 2 ? 'active' : ''}`}  onClick={setFeat}>Speedy Searching</p></span> 
          <span onClick={() => setVar(3)}> <p className={`b__features-conatiner-title ${varState === 3 ? 'active' : ''}`}  onClick={setFeat} >Easy Sharing</p></span> 
        </div>
        <div className={`b__featues-container_contents ${eName}`} >
          <div className="b__featues-container_content">
            <div className="b__featues-container_content-image_container">
              <img src={sb} alt="simple bookmarking" />
            </div>
            <div className="b__featues-container_content-body">
              <Title title={"Bookmark in one click"} color={"#000"} size={'30px'} />
              <Text size={'20px'} color={"#000"} Text={"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complelte control over how you manage your favourite sites."} />
              <Btn color={"#fff"} bgColor={'hsl(231, 69%, 60%)'} text={'More Info'} bState={true} />
            </div>
          </div>
          
          <div className="b__featues-container_content">
            <div className="b__featues-container_content-image_container">
              <img src={ss} alt="Speedy searching" />
            </div>
            <div className="b__featues-container_content-body">
              <Title title={"Intelligent search"} color={"#000"} size={'30px'} />
              <Text size={'20px'} color={"#000"} Text={"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."} />
              
              <Btn color={"#fff"} bgColor={'hsl(231, 69%, 60%)'} text={'More Info'} bState={true} />
            </div>
          </div>
          
          <div className="b__featues-container_content">
            <div className="b__featues-container_content-image_container">
              <img src={es} alt="easy sharing" />
            </div>
            <div className="b__featues-container_content-body">
              <Title title={"Share your bookmarks"} color={"#000"} size={'30px'} />
              <Text size={'20px'} color={"#000"} Text={"Easily share your bookmarks and collections with others. Create a sharable link that you can send at the click of a button."} />
              
              <Btn color={"#fff"} bgColor={'hsl(231, 69%, 60%)'} text={'More Info'} bState={true} />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
