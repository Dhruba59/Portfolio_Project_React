import React from 'react'
import css from './project.module.css'

const Project = ({project}) => {

  return (
    <div className={css.project}>
      <div className={css.projectInfo}>
        <div className={css.title}>{project.title}</div>
        <div className={css.links}>
          <a href={project.github}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            <label>Github</label>
          </a>
        </div>
        <div className={css.description}>{project.desc}</div>
        <div className={css.tags}>
          {project.tags.map( (tag) => <label className={css.tag}>{tag}</label>)}
        </div>
        <button className={css.button}> Learn More</button>
      </div>
      <img className={css.projectImage} src={project.image} alt="Project image"></img>
    </div>
  )
}

export default Project
