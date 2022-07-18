import React from 'react'
import './style/contact.css'

const ContactScreen = () => {
  return (
    <section className='contact' id='/contact'>
      <div className="container">
        <div className="container-contact">
          <h2 className='contact-title'>contacto</h2>
          <div className="container-contact-icons">
            <article className='contact-icons'>
              <div className="icons">
                <i className="fa-solid fa-phone"></i>
              </div>
              <p>+57 3118426039</p>
            </article>
            <article className='contact-icons'>
              <div className="icons">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <p>johandanilogarzon@gmail.com</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactScreen