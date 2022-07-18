import React from 'react'
import './style/technologies.css'

const TecnologiesScreen = () => {
  return (
    <section className='technologies' id='/technologies'>
      <article className='container tech-container'>
        <h2 className='tech-title'>Tecnologías</h2>
        <ul className='tech-images'>
          <li>
            <div className='tech-img-container'>
              <img className='tech-img' src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="react-image"/>
            </div>
            <h4>HTML</h4>
          </li>
          <li>
            <div className='tech-img-container'>
              <img className='tech-img' src="https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png" alt="react-image" />
            </div>
            <h4>CSS</h4>
          </li>
          <li>
            <div className='tech-img-container'>
              <img className='tech-img' src="https://static.cdnlogo.com/logos/j/69/javascript.svg" alt="react-image" />
            </div>
            <h4>JavaScript</h4>
          </li>
          <li>
            <div className='tech-img-container'>
              <img className='tech-img' src="https://icon-library.com/images/react-icon/react-icon-29.jpg" alt="react-image" />
            </div>
            <h4>React</h4>
          </li>
          <li>
            <div className='tech-img-container'>
              <img className='tech-img' src="http://nightdeveloper.net/wp-content/uploads/2018/01/logo.png" alt="react-image" />
            </div>
            <h4>Redux</h4>
          </li>
          <li>
            <div className='tech-img-container'>
              <img className='tech-img' src="https://reacttraining.com/images/blog/reach-react-router-future.png" alt="react-image" />
            </div>
            <h4>React Router</h4>
          </li>
        </ul>
      </article>
    </section>
  )
}

export default TecnologiesScreen