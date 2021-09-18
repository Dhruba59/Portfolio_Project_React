import React from 'react'
import menuIcon from '../../../assets/img/menu.png'
import css from './webMenu.module.css'

const index = (props) => {
  return (
    <div className={css.menus}>
      <a href="#projects"> Projects </a>
      <a href="#skilss"> Skills </a>
      <a href="#about"> About</a>
      <a href="#Contact"> Contact </a>
      <a href="#Others"> Others </a>
    </div>

  )
}

export default index
