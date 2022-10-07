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
              <small>Bachelors in Software Engineering Science from Western University</small>
            </article>

            <article className='about__card'>
              <FiClipboard className='about__icon' />
              <h3>Technical Skills</h3>
              <small>Experienced in handful of languages, libraries & frameworks. Always excited to learn more!</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h3>Teamwork Driven</h3>
              <small>Experienced using agile (SCRUM) methodology for sprints</small>
            </article>

            <article className='about__card'>
              <FiGithub className='about__icon' />
              <h3>Projects</h3>
              <small>Extensive list of projects on GitHub</small>
            </article>

            <article className='about__card'>
              <FiBarChart className='about__icon' />
              <h3>Always Growing</h3>
              <small>Life long learning of new technical and non-technical skills</small>
            </article>


            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h3>Experience</h3>
              <small>Comfortable working in fast paced teams and environments</small>
            </article>
          </div>

          <center> <p>
            Hi, I am Janmejay Buranpuri. I am a junior software engineer who is passionate about making a difference in the world. I am very interested in working on projects which can improve peoples quality of life. That is why I worked on projects such as FitSync, Sonu Lifts, and created ML models to identify phishing sites.

            I believe in lifelong learning learning and evolving to become a better engineer and a better person. I am constantly increasing my technical knowledge, my meditation skills, my fitness, and my interpersonal skills!

            Teamwork and communication are some of the important skills I possess. My past experiences show I was able to go above and beyond the requirements and achieve great results. Everyone I have worked with has written and said great things about me. I am still friends with my supervisors and managers today!
          </p></center>

          <center><a href="#contact" className='btn btn-primary'>Contact Me</a></center>
        </div>
      </div>
    </section>
  )
}

export default About