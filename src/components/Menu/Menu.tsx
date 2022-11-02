import React from 'react'
import './Menu.css'

export const Menu = (props: any) => {
  return (
    <div className="b__Menu">
      <div className={`b__Menu-container ${props.toggleMenu ? '' : ''}`}>
        <hr />
        <p><a href="#features">Features</a></p>
        <hr />
        <p><a href="#pricing">pricing</a></p>
        <hr />
        <p><a href="#contact">contact</a></p>
        <hr />
      </div>
    </div>
  )
}
