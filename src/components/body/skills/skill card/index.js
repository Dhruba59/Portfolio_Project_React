import React from 'react'
import css from './skillCard.module.css'

const skillCard = ({skill}) => {
  return (
    <div className={css.skillCard}>
      <div className={css.skillIcon}>{skill.icon}</div>
      <label>{skill.name}</label>
    </div>  
  )
}

export default skillCard
