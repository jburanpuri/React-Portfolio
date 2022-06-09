import React from 'react'
import Resume from '../../assets/resume/resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={Resume} download className='btn btn-primary'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA