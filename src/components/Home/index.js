import React from 'react'
import Body from '../body/index'
import Footer from '../footer/index'
import Header from '../header/index'
import css from './home.module.css'

const index = () => {
  return (
    <>
    <div className={css.home}>
      <Header/>
      <Body/>
    </div>
    <Footer/>
    </>
  )
}

export default index
