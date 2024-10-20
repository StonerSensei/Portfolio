import React from 'react'
import './about_me.css'
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
    initial={{
     opacity:0,
     y:40
    }} 
    whileInView={
     {
       opacity:1,
       y:0
     }
    }
    transition={{
     delay:0.2,
     duration:0.5
    }}
    viewport={{
      once:true
     }}
      className='about_me'  id="aboutMey">
      <h2 className='heading'>About Me</h2>
    <div className="about_me_info">
        <p className='about_me_left'>Hello! I'm M. Parth, Proficient in Android development with a solid understanding of Data Structures and
Algorithms (DSA). Currently pursuing expertise in Java backend development to expand my
skill set and contribute effectively to impactful projects.!</p>
        <div className="about_me_right"></div>
    </div>

    </motion.div>
    
  )
}

export default AboutMe
