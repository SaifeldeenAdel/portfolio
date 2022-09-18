import React from 'react'
import { Content, Heading } from '../../styles/GlobalStyles'


const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {delay: 0.3, when: "beforeChildren"}
  },
  exit: {
    opacity: 0,
    transition: {ease: "easeIn"}
  }
}

const Challenges = () => {
  return (
    <Content variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
      <Heading>
        Coding Challenges
      </Heading>
    
    
    </Content>
    
  )
}

export default Challenges