import React, { useEffect } from 'react'
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

const Contact = () => {
  useEffect(() => {
    document.title= "Get in Touch"
  }, [])
  
  return (
    <Content variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
      <Heading>
        Get in Touch
      </Heading>
    
    
    </Content>
  )
}

export default Contact

