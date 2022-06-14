import React from 'react'
import './nav.css'
import { AiOutlineUser, AiFillClockCircle, AiFillFund, AiOutlineHome } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { BsCardChecklist } from "react-icons/bs";
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} title='Home'><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} title='About Me'><AiOutlineUser /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} title='My Projects'><BiBook /></a>
      <a href="#experiences" onClick={() => setActiveNav('#experiences')} className={activeNav === '#experiences' ? 'active' : ''} title='My Experiences'><BsCardChecklist /></a>
      <a href="#technology" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} title='Technology'><AiFillFund /></a>
      <a href="#contact" on onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} title='Contact Me'><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav