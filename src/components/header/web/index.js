import React from 'react'
import menuIcon from '../../../assets/img/menu.png'
import css from './webMenu.module.css'
import { HashLink as Link } from 'react-router-hash-link';

const index = (props) => {
  return (
    <div className={css.menus}>
      <Link smooth to="#about"> About </Link>
      <Link smooth to="#projects"> Projects </Link>
      <Link smooth to="#skills"> Skills </Link>
      <Link smooth to="#others"> Others </Link>
      <Link smooth to="#contact"> Contact </Link>
    </div>

  )
}

export default index
