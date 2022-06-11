import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { FiUsers, FiBarChart, FiClipboard, FiGithub } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know More</h5>
      <h2>About Me</h2>
      <div className="container about__container">

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h3>Education</h3>
              <small>Bachelors in Software Engineering Science</small>
            </article>

            <article className='about__card'>
              <FiClipboard className='about__icon' />
              <h3>Technical Skills</h3>
              <small>Experienced in Handful Languages, Libraries & Frameworks</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h3>Teamwork Driven</h3>
              <small>Experienced in Using Agile (SCRUM) Methodology for Sprints</small>
            </article>

            <article className='about__card'>
              <FiGithub className='about__icon' />
              <h3>Projects</h3>
              <small>Extensive List of Unique Projects on GitHub</small>
            </article>

            <article className='about__card'>
              <FiBarChart className='about__icon' />
              <h3>Optimization</h3>
              <small>Ability in Optimizing Algorithms for Time & Space Complexity</small>
            </article>


            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h3>Experience</h3>
              <small>Comfortable in Working in Fast Paced Teams</small>
            </article>
          </div>

          <center> <p>
            Junior software engineer with a passion for developing innovative and useful solutions.
            A strong passion for designing, developing, testing and debugging code.
            I am always on the lookout for new software opportunies so please don't hesitate to contact me!
          </p></center>

          <center><a href="#contact" className='btn btn-primary'>Contact Me</a></center>
        </div>
      </div>
    </section>
  )
}

export default About