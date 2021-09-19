import React from 'react'
import ProjectCard from './Project/index'
import projectsData from '../../../assets/project data/projectData'
import css from './projects.module.css'

const Projects = () => {
  return (
    <div className={css.projects} id="projects">
      {projectsData.map((project) => {
        return <ProjectCard project={project}/>
      })}
    </div>
  )
}

export default Projects
