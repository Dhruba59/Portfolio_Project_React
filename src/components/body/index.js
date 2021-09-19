import React from 'react'
import About from './about/index'
import Contact from './contact/index'
import Skills from './skills/index'
import Projects from './projects/index'
import css from './body.module.css'

const Body = () => {
  return (
    <div className={css.body}>
      <div className={css.bodyElement} id="about">
        <p className={css.welcome}>Welcome to my Portfolio!!!</p>
        <About/>
      </div>
      <div className={css.bodyElement} id="projects">
        <p className={css.seperator}>Projects</p>
       
        <Projects />
      </div>
      <div className={css.bodyElement} id="skills">
        <p className={css.seperator}>Skills</p> 
        <Skills />
      </div>  
      {/* <Contact /> */}
    </div>
  )
}

export default Body
