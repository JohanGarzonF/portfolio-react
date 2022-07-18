import React from 'react'
import pokedex from '../../assets/img/pokedex.jpg'
import rickandmorty from '../../assets/img/rickandmorty.png'
import crud from '../../assets/img/crud.jpg'
import './style/portfolio.css'

const PortfolioScreen = () => {
  return (
    <section className='portfolio' id='/portfolio'>
      <div className='container portfolio-container'>
        <h2 className='portfolio-title'>portafolio</h2>
        <div className="portfolio-cards-container">
          <article className='portfolio-card'>
            <div
              className="front-card" 
              style={{backgroundImage: `url(${pokedex})`}}>
            </div>
            <div className="back-card">
              <div className="body-back-card" style={{paddingLeft: '20px'}}>
                <p>Te gustaría conocer mi Pokedex, uso la API de pokemons y también pongo en prática todas las tecnologías anteriores</p>
                <a href="https://pokeapi-johangarz.netlify.app/#/" target='blanck'>Ir a la App</a>
              </div>
            </div>
          </article>
          <article className='portfolio-card'>
            <div 
              className="front-card" 
              style={{backgroundImage: `url(${rickandmorty})`}}>
            </div>
            <div className="back-card">
              <div className="body-back-card" style={{paddingRight: '30px'}}>
                <p>En este proyecto puse en practica los custom hook y llamada a las API's</p>
                <a href="https://rickandmorty-johandangarz.netlify.app/" target='blanck'>Ir a la App</a>
              </div>
            </div>
          </article>
          <article className='portfolio-card'>
            <div 
              className="front-card" 
              style={{backgroundImage: `url(${crud})`}}>
            </div>
            <div className="back-card">
              <div className="body-back-card">
                <p>Te invito a ver esta App donde usé un CRUD con Axios, Create, Read, Update y Delete</p>
                <a href="https://crudofusers-johand-garzf.netlify.app/" target='blanck'>Go to App</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

  )
}

export default PortfolioScreen