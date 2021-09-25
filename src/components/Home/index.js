import React from 'react'
import Body from '../body/index'
import Footer from '../footer/index'
import Header from '../header/index'
import { BrowserRouter as Router } from 'react-router-dom'
import css from './home.module.css'

const index = () => {
  return (
    <Router>
      <div className={css.home}>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </Router>
  )
}

export default index
