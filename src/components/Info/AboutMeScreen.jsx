import React from 'react'
import './style/aboutScreen.css'

const AboutMeScreen = () => {
  return (
    <section className='aboutme' id='/about-me'>
      <article className=' container'>
        <div className='aboutme-container'>
          <h2 className='aboutme-title'>sobre mí</h2>
          <p className='aboutme-text'>Hola de nuevo, soy Johan.</p>
          <p className='aboutme-text'>
            Soy curioso por naturaleza, me gusta indagar el qué y porque de las cosas, y lo noté aún más cuando conocí el mundo de la programación. Comencé hace algún tiempo tomando unos pequeños cursos de HTML y CSS básicos y me encantó ver lo mucho que podía llegar a hacer en este mundo, y conocí a Academlo de donde soy egresado de desarrollo web Full Stack y ciencias de la computación, aquí aprendí mucho más de las tecnologías anteriores, como JavaScript, React.js, Redux, React Router, git y github; debo decir que me gusta mucho el Front, porque mezcla la lógica con el diseño.
          </p>
          <p className='aboutme-text'>
            Soy responsable, muy comprometido con mi crecimiento personal y profesional, me gusta mucho apreder cosas nuevas, para conociento general y por diversión, me gusta programar y la grandiosa idea de que siempre puedo aprender más...
          </p>
        </div>
      </article>
    </section>
  )
}

export default AboutMeScreen