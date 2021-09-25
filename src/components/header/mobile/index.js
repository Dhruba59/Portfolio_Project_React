import React from 'react'
import css from './mobileMenu.module.css'
import closeIcon from '../../../assets/img/close-icon.png'

const index = (props) => {
  return (
    <div className={css.nav}>
      <img className={css.closeIcon}
           src={closeIcon}
           onClick={() => props.setIsOpen(false)}></img>
      <div className={css.menus}>
        <a href="#about"> About</a>
        <hr />
        <a href="#projects"> Projects </a>
        <hr/>
        <a href="#skills"> Skills </a>
        <hr/>
        <a href="#contact"> Contact </a>
        <hr/>
        <a href="#Others"> Others </a>
      </div>
    </div>

    
  )
}

export default index
