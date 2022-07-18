import React from 'react'
import './style/homeScreen.css'

const HomeScreen = () => {
  return (
    <main className='home' id='/'>
      <div className='container home-container'>
        <div className='home-img-container'>
          <div className="home-img"></div>
        </div>
        <div className='home-title-container'>
          <h3 className='small-title'>Hola! soy </h3>
          <h2 className='large-title'>Johan Garzon</h2>
          <div>
            <p className='home-description'>Desarrollador Web Front-end en React</p>
          </div>
          <a className='home-cv' href='/JohanGarzoncv.pdf' target='blank'>Descargar CV</a>
        </div>
      </div>
    </main>
  )
}

export default HomeScreen