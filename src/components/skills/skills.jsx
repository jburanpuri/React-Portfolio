import React from 'react'
import './skills.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='skills'>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Design & Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creative and Innovative Designs & Animations</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Improve Speed by Optimizing Frontend and Backend</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Great at Increasing Functionality Improving User Satisfaction</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Intelligent Solutions to Keep Website Looking Sleek</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experienced in Creating REST API From Scratch </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Machine Learning</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Growing Knowledge in Python Pandas</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Passionate in Computer Vision & Deep Vision</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Very Interested in Self-Driving Cars</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Learning Supervised and Unsupervised Learning</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Other Interests</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Coaching Clients Online For Dieting & Working Out</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Making Educational Websites for My Passions</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Reading Health and Supplements Research Papers</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Playing and Creating Games</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Meditation</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services