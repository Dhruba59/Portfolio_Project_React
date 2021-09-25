import React from 'react'
import myPhoto from '../../../assets/img/Layer 2.jpg'
import css from './about.module.css'
import socialData from '../../../assets/project data/socialData'

const About = () => {

  const redirect = (link) => {
    window.location.replace(link);
  }
  return (
    <div className={css.about} id="about">
      <div className={css.myPhotoDiv}>
        <img className={css.myPhoto} src={myPhoto}></img>
      </div>
      <p>Hello, I am Dhruba. I have graduated from Shahjalal University of Science and Technology. My hometown is Sylhet, Bangladesh. Currently I am looking for a opportunity to start my career. I love to work with web development. I have experience in frontend development using React, javascript etc. Also I am familiar with backend development using NodeJs, Express, MongoDB etc. I would love to start my career with these stacks. 
        <br/> <br/> Apart from my career and academic life, I love to travel alot. Also I have a great passion for photography and cinematography. You can have a look on my photos on instagram.
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
