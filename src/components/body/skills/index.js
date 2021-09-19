import React from 'react'
import skillsData from '../../../assets/skills/skilslData'
import css from './skills.module.css'
import SkillCard from './skill card/index'
const Skills = () => {
  return (
    <div className={css.skills} id="skills">
      {skillsData.map( (item) => {
        return(
          <div className={css.skillsSection}>
            <label className={css.skillType}>{item.type}</label>
              <div className={css.skillList}>
                {item.list.map((skill) => {
                  return <SkillCard skill={skill}/>
                })}
              </div>
          </div>
        );
      })}
    </div>
  )
}

export default Skills
