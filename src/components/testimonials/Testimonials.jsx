import React from 'react'
import './testimonials.css'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    name: 'Arjun Mahadeva, Kinectrics - IT Manager',
    review: 'You were an exceptional co-op student. I have no doubt that you will excel at all your future endeavours. you were like a sponge and absorbed all the information thrown at you. You are an incredibly quick learner, and we appreciate your initiative to learn new skills as well as help improve on our processes. You were also a great team player, communicated well with end-users, and were a delight to work with. Best of luck with school and everything else!'
  },
  {
    name: 'Cody Hardy, Kinectrics - IT Supervisor',
    review: 'You did a great job here and picked up information like a sponge.I look forward to seeing where your career takes you!'
  },

  {
    name: 'Mack, TNPC - Founder',
    review: 'Needed a website made and Janmejay created it very quickly. Made it elegant and met the requirements perfectly. Great and friendly person to work with. Look forward to doing business with him again.',
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h2>Thoughts From Previous Employers</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]} spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials