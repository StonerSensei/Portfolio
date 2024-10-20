import React from 'react'
import Card from './Card';
import quiz from"./images/images.jpeg"
import exam from"./images/download (1).jpeg"
import { motion } from 'framer-motion';

const Projects = () => {
    const cards = [
        {
          imageUrl: quiz,
          altText: 'Quiz Application',
          title: 'Quiz Application',
          description: 'A full-stack quiz application built with Java Spring Boot and React, featuring category-based question filtering and secure user authentication.',
        },
        {
          imageUrl: exam,
          altText: 'Exam Form Submission',
          title: 'Exam Form Submission',
          description: '"Designed and implemented an SQL database, facilitating a dynamic platform for exam submissions, accommodating both regular and backlog examinations."',
        },
      ];

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
        margin:"-100px",
      once:true
     }} className="up_gap " id="project">
        <h2 className='heading1 down_gap'>Projects</h2>
        <div className="completely">
        
    <div className="grid" >
        
      {cards.map((card, index) => (
        
        <Card
          key={index}
          imageUrl={card.imageUrl}
          altText={card.altText}
          title={card.title}
          description={card.description}
          explore={card.explore}
        />
      ))}
    </div>
    </div>
    </motion.div>
  )
}

export default Projects
