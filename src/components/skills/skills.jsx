import React from 'react'
import './skills.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='skills'>
      <h2>My Skills</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Design & Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Skillful in CSS to create beautiful and sleek websites </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ability to create both a front-end and back-end from scratch</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experienced creating REST APIs from stratch</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ability to create websites with full sanitization and encryption</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Capable of adding payment methods to websites </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Capable of improving loading times by optimizing code</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Artificial Intelligence</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Growing knowledge in Python Pandas</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Passionate in AGI</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ability to analyze & compare data using DataFrame</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Capable of creating machine learning models and test them using a train test split (SKLEARN)</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Other Skills</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Coaching clients online for dieting & working out</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Making educational websites on my passionss</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Reading research papers to reduce misinformation online</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Playing and creating games</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Meditation to find out more about myself</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services