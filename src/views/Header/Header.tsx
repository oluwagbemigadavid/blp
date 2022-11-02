import React, {useState, useEffect} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { Button } from '../../components/Button/Button'
import { Logo } from '../../components/Logo/Logo'
import { Menu } from '../../components/Menu/Menu'
import './Header.css'

export const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='b__Header'>
        <div className="b__Header-container">
            <div className="b__Header-nav-bar section__margin">
                <div className="b__Header-nav-bar_left">
                    <Logo toggleMenu={toggleMenu} />
                    <div className="b__Header-nav-bar_left-menuToggle">                            
                        {toggleMenu ? 
                            <RiCloseLine color={'#fff'} size={30} onClick={() => setToggleMenu(!toggleMenu)} /> : 
                            <RiMenu3Line color={'#000'} size={30} onClick={() => setToggleMenu(!toggleMenu)} />
                        }
                    </div>
                </div>
                <div className="b__Header-nav-bar_right">
                    <div className={`b__Header-nav-bar_right-cont ${toggleMenu ? 'show' : ''}`}>
                        <Menu  toggleMenu={toggleMenu}/>
                        <Button color={'#fff'} bgColor={'hsl(0, 94%, 66%)'} text={'Login'} />
                    </div>
                </div>
            </div>
        </div>     
        <div className={`b__Header-overlay ${toggleMenu ? 'show-overlay' : ''}`}></div> 
    </div>
  )
}
