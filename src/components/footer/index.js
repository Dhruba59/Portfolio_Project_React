import React from 'react'
import css from './footer.module.css'
import socialData from '../../assets/project data/socialData'

const Footer = () => {
  
  const redirect = (link) =>{
    window.location.replace(link);
  }

  return (
    <div className={css.footer}>
      <div className={css.contactMe}>
        <label>Contact</label>
        <p>Dhruba Jyoti Sarker <br/>
        <a href="tel:+8801787868985">Phone: +8801787868985</a> <br/>
        <a href="mailto:dhruba59.sust@ com">Mail at: dhruba59.sust@gmail.com</a> <br/>
          Bagbari, Sylhet, Bangladesh</p>
      </div>
      <div className={css.social}>
        <label>Get in touch</label>
        <div className={css.socialLinks}>
          {socialData.map((item) => {
            return (
              <div onClick={() => redirect(item.link)} className={css.link}> {item.icon} </div>
            );
          })}
        </div>
      </div>  
    </div>
  )
  }
export default Footer
