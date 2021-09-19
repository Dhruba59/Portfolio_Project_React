import React from 'react'
import About from './about/index'
import Contact from './contact/index'
import Skills from './skills/index'
import Projects from './projects/index'
import css from './body.module.css'

const Body = () => {
  return (
    <div className={css.body}>
      <div id="#about">
      <label className={css.seperator}>Welcome to my Portfolio</label>
        <About/>
      </div>
      <div id="projects">
        <label className={css.seperator}>Projects</label>
        <hr/>
        <Projects />
      </div>
      <div id="skills">
        <label className={css.seperator}>Skills</label>
        <hr/>
        <Skills />
      </div>  
      {/* <Contact /> */}
    </div>
  )
}

export default Body
