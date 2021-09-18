import React from 'react'
import myPhoto from '../../../assets/img/Layer 2.jpg'
import css from './about.module.css'
import socialData from '../../../assets/project data/socialData'

const About = () => {

  const redirect = (link) => {
    window.location.replace(link);
  }
  return (
    <div className={css.about}>
      <div className={css.myPhotoDiv}>
        <img className={css.myPhoto} src={myPhoto}></img>
      </div>
      <p>Hello and welcome to my cumulative Portfolio for Eng 131 Fall Quarter 2012! My name is Anthony Evans and I am making this portfolio not only to display the works that I have written in this class, but also to show how my writing has improved throughout the quarter. At the beginning of this course I was not the most confident in my writing skills, in fact I always dreaded having to write essays. I made it a goal to become a better writer and find a writing style that worked for me instead of relying on the writing models given to me in High School. I am making this portfolio in order to show that I have finally reached my goals, and have grown in to a much more confident writer than I was before.

Compared to the beginning of this quarter where I was always questioning my writing while taking hours upon hours to write a short assignment, I am now much more confident in my writing and feel that I have undoubtedly improved in my writing. In the beginning of this course I was constantly taking too much time to write my introductory paragraphs, and always over-thought my papers, changing my sentences multiple times before I decided it was good enough. However, as the year progressed I noticed that I was spending less time wondering if my sentences or paragraphs were perfect and instead just wrote what first came into my head, worrying about the revisions later. Not only have I improved in my efficiency of writing essays, but I have also improved in my writing in general as evident within my each of my essays. Overall, I would say that my writing has drastically improved since the beginning of the quarter. My essays are now not only more organized than they were at the beginning of the year, but they also flow better, and are much stronger in general.
      </p>
      <div className={css.socialLinks}>
          {socialData.map((item) => {
            return (
              <div onClick={() => redirect(item.link)} className={css.link}> {item.icon} </div>
            );
          })}
        </div>
    </div>
  )
}

export default About
