import React, { useEffect } from 'react'
import { Contact, ContactsContainer, Icon, ContactLink } from '../../styles/ContactMe-styles'
import {Content, Heading } from '../../styles/GlobalStyles'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faStickyNote } from '@fortawesome/free-solid-svg-icons'
import pdf from "../../pdf/CV.pdf"
import { motion } from 'framer-motion'



const ContactMe = () => {
  useEffect(() => {
    document.title= "Get in Touch"
  }, [])

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
  
  const contactContainerVariants = {
    visible: {
      x:0,
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        type: "tween",
      }
    }
  
  }
  
  const contact = {
    hidden: {
      x:-50,
      opacity: 0,
    },
    visible: {
      x:0,
      opacity: 1,
      transition: {
        type: "tween",
        stiffness: 10,
      }
    }
  
  }
  
  return (
    <Content variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
      <Heading>
        Get in Touch
      </Heading>
      <motion.div variants={contactContainerVariants}>
        <ContactsContainer variants={contact} >
          <Contact>
            <Icon icon={faGithub}/>
            <ContactLink href="https://github.com/SaifeldeenAdel" target="_blank">
              Visit my <b>Github</b>

            </ContactLink>
            
          </Contact>
        </ContactsContainer>

        <ContactsContainer variants={contact}>
          <Contact>
            <Icon icon={faEnvelope}/>
            <ContactLink href="mailto:saifeldeenadell@gmail.com" target="_blank">
              Send me an <b>Email</b>

            </ContactLink>
            
          </Contact>
        </ContactsContainer>

        <ContactsContainer variants={contact}>
          <Contact>
            <Icon icon={faLinkedin}/>
            <ContactLink href="https://www.linkedin.com/in/saifeldeenadel/" target="_blank">
              View my <b>LinkedIn Profile</b>

            </ContactLink>
            
          </Contact>
        </ContactsContainer>

        <ContactsContainer variants={contact}>
          <Contact>
            <Icon icon={faStickyNote}/>
            <ContactLink href={pdf} target="_blank">
              Read my <b>Resume</b>

            </ContactLink>
            
          </Contact>
        </ContactsContainer>

      </motion.div>
    
    
    </Content>
  )
}

export default ContactMe 

