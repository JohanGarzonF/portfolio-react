import React from 'react'
import pokedex from '../../assets/img/pokedex.png'
import rickandmorty from '../../assets/img/rickandmorty.png'
import todolist from '../../assets/img/to-do-list.png'
import tictactoe from '../../assets/img/tic-tac-toe.png'
import planificadorGastos from '../../assets/img/planificador-gastos.jpg'
import './style/portfolio.css'
import routesPortfolio from '../../routes'

const IMAGES_ROUTES = {
  'pokedex': pokedex,
  'rickandmorty': rickandmorty,
  'todolist': todolist,
  'tictactoe': tictactoe,
  'planificadorgastos': planificadorGastos,
}

const PortfolioScreen = () => {
  return (
    <section className='portfolio' id='/portfolio'>
      <div className='container portfolio-container'>
        <h2 className='portfolio-title'>portafolio</h2>
        <div className="portfolio-cards-container">
          {
            routesPortfolio.map(route => (
              <article key={route.img} className='portfolio-card'>
                <div
                  className="front-card"
                  style={{ backgroundImage: `url(${IMAGES_ROUTES[route.img]})`}}>
                </div>
                <div className="back-card">
                  <div className="body-back-card" style={{ paddingLeft: '15px', textAlign: 'center' }}>
                    <p>{route.description}</p>
                    <a href={route.linkPage} target='blank'>Ir a la App</a>
                  </div>
                </div>
              </article>
            ))
          }
        </div>
      </div>
    </section>

  )
}

export default PortfolioScreen