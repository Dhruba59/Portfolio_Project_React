import React from 'react'
import About from './about/index'
import Contact from './contact/index'
import Skills from './skills/index'
import Projects from './projects/index'
import css from './body.module.css'

const Body = () => {
  return (
    <div className={css.body}>
      <About />
      <label className={css.seperator}>Projects</label>
      <hr/>
      <Projects />
      <label className={css.seperator}>Skills</label>
      <hr/>
      <Skills />
      {/* <Contact /> */}
    </div>
  )
}

export default Body
