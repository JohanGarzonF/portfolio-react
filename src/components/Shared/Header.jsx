import React, { useRef, useState } from 'react'
import './styles/headerScreen.css'

const Header = () => {

  const navList = useRef()

  const clickNav = () => {
    navList.current.classList.toggle('nav-open')
  }
  const closeNav = () => {
    if(navList.current.classList == 'navbar-list nav-open'){
      navList.current.classList.toggle('nav-open')
    }
  }

  return (
    <header className='header' id='/'>
      <nav className='header-navbar container'>
        <h1 className='navbar-title'><a href='#/'>&#123; J<span>ohann</span>Dev &#125;</a></h1>
        <div onClick={clickNav} className="navbar_hamb">
          <i className="fa-solid fa-bars"></i>
        </div>
        <ul ref={navList} className='navbar-list'>
          <li onClick={closeNav}><a href="#/" className='navbar-link'>Home</a></li>
          <li onClick={closeNav}><a href="#/about-me" className='navbar-link'>Acerca de mí</a></li>
          <li onClick={closeNav}><a href="#/technologies" className='navbar-link'>Tecnologías</a></li>
          <li onClick={closeNav}><a href="#/portfolio" className='navbar-link'>Portafolio</a></li>
          <li onClick={closeNav}><a href="#/contact" className='navbar-link'>Contacto</a></li>
        </ul>
      </nav>

    </header>
  )
}

export default Header