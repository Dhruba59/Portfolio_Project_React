import React from 'react'
import css from './header.module.css'
import MobileMenu from './mobile/index'
import WebMenu from './web/index'
import { useState, useEffect } from 'react'
import menuIcon from '../../assets/img/menu.png'

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState('white');

  const listenScrollEvent = e => {
    if (window.scrollY > 200) {
      setHeaderColor('floralwhite');
    } else {
      setHeaderColor('white');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  }, [])
  return (
    <div style={{backgroundColor: headerColor}} className={css.header}>
      <div className={css.logo}>Portfolio</div>
      <div className={css.menu}>
        <div className={css.webMenu}>
          <WebMenu/>
        </div>
        <div className={css.mobileMenu}>
          <div className={css.menuIcon} >
            <img onClick={() => {setIsOpen(!isOpen)}} 
                  src={menuIcon} alt="menu-icon" 
                  width="25px" 
                  height="25px" >
                
              </img>
          </div>
          
          {isOpen && <MobileMenu setIsOpen={setIsOpen}/> }
        </div>
        
      </div>
    </div>
  )
}

export default Index
