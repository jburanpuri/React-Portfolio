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
    title: 'Western Scheduler',
    github: 'https://github.com',
  },
  {
    id: 2,
    image: IMG2,
    title: 'FitSync',
    github: 'https://github.com',
  },
  {
    id: 3,
    image: IMG3,
    title: 'True North Protective Coatings',
    github: 'https://github.com',
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} width="700" height="350" />
                </div>
                <center>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='_blank'>Github</a>
                  </div>
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