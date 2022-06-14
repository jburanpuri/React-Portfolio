import React from 'react'
import './contact.css'


const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <h4>Email:</h4>
            <a href="mailto:jburanpuri@gmail.com" target="_blank">jburanpuri@gmail.com</a>
          </article>
          <br></br>
          <article className="contact__option">
            <h4>Linkedin:</h4>
            <a href="https://www.linkedin.com/in/jburanpuri/" target="_blank">linkedin.com/in/jburanpuri</a>
          </article>
          <br></br>
          <article className="contact__option">
            <h4>GitHub Projects:</h4>
            <a href="https://github.com/jburanpuri" target="_blank">github.com/jburanpuri</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact