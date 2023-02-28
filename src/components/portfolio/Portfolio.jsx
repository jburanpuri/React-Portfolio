import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Portfolio1.png'
import IMG2 from '../../assets/Portfolio2.png'
import IMG3 from '../../assets/Portfolio3.png'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Intelligent Lifting',
    github: 'https://intelligentlifting.net',
    problem: 'Personalized gym plans are very expensive. Such plans can cost over $100 making them very unafforable for many people',
    solution: 'Providing free workout plans which adapt to the individuals recovery, allowing for optinmal training and recovery. Planning to grow by 30% every year by adding new products.',
    technology: 'Next, React, TailwindCSS, AWS Amplify'
  },
  {
    id: 2,
    image: IMG2,
    title: 'FitSync',
    github: 'https://github.com/jburanpuri/FitSync',
    problem: 'Beginners have a very hard time starting off at the gym because they do not know what to do. Personal trainers are very expensive and learning proper execution of exercises takes a lot of practice. It makes working out super difficult. ',
    solution: 'FitSync solves this major issue by connecting users to trainers. Trainers can create workout plans for users while working remotely and users have the flexibity to workout at anytime. FitSync also has a large database of exercises with animations, tips and tricks giving users an easier time at the gym. FitSync also tracks workouts which makes progressive overloading easier.',
    technology: 'MongoDB, Expressjs, React, Nodejs, CSS, Socket.IO, JIRA (SCRUM Methodology)'
  },
  {
    id: 3,
    image: IMG3,
    title: 'True North Protective Coatings',
    github: 'https://github.com/jburanpuri/TNPC-Final',
    problem: 'TNPC contacted me to build a website for their business which looked clean and met all their technical requirements. They wanted to have direct to consumer sales via an online website',
    solution: 'Developed a website using HTML, CSS and JavaScript to create a compelling website to increase their sales',
    technology: 'HTML, CSS, JavaScript'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>My Best Projects</h2>
      <center><a href="https://github.com/jburanpuri" className='btn1' target='_blank'>All Projects</a></center>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, problem, solution, technology }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} width="700" height="350" />
                </div>
                <center>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn2' target='_blank'>View Code</a>
                  </div>
                  <h4>
                    <b>Problem: </b> <small>{problem}</small>
                    <br></br>
                    <b>Solution: </b> <small>{solution}</small>
                    <br></br>
                    <b>Stack: </b><small>{technology}</small>
                  </h4>
                </center>

              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio