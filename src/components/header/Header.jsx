import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <header>

      <div className="container header__container">
        <h1>Janmejay Buranpuri</h1>
        <h2>I am a</h2>
        <h5 className="typer">
          <Typewriter
            options={{
              strings: ['Software Engineer', 'Web Developer', 'Space Fanatic', 'Powerlifter', 'Gamer'],
              autoStart: true,
              loop: true,
              deleteSpeed: 'natural',
              pauseFor: '1000',
              delay: '75'
            }}
          />
        </h5>
        <CTA />
        <HeaderSocial />

      </div>
    </header>
  )
}

export default Header
