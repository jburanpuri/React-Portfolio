import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { FiUsers, FiBarChart, FiClipboard, FiGithub } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
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
              <small>Experienced in handful languages, libraries & frameworks</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h3>Teamwork Driven</h3>
              <small>Experienced in using agile (SCRUM) methodology for sprints</small>
            </article>

            <article className='about__card'>
              <FiGithub className='about__icon' />
              <h3>Projects</h3>
              <small>Extensive list of unique projects on GitHub</small>
            </article>

            <article className='about__card'>
              <FiBarChart className='about__icon' />
              <h3>Optimization</h3>
              <small>Ability in optimizing algorithms for time & space Complexity</small>
            </article>


            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h3>Experience</h3>
              <small>Comfortable in working in fast paced teams</small>
            </article>
          </div>

          <center> <p>
            Junior software engineer with a passion for developing innovative and useful solutions.
            A strong passion for designing, developing, and testing code.
            I am always on the lookout for new software opportunities so please don't hesitate to contact me!
          </p></center>

          <center><a href="#contact" className='btn btn-primary'>Contact Me</a></center>
        </div>
      </div>
    </section>
  )
}

export default About