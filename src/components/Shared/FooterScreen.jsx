import React from 'react'
import './styles/footer.css'

const FooterScreen = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className='footer-container'>
          <ul className='icons-footer'>
            <li>
              <a href="https://www.linkedin.com/in/johan-danilo-garz%C3%B3n-forero-056856234/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/JohanGarzonF">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
          <p className='footer-text'>&copy; Johan Garzon Developer.</p>
          <p className='footer-text'>All rights reserved 2022.</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterScreen