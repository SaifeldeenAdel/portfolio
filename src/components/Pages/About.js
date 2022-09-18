import React, { useEffect } from 'react'
import { Framework , Frameworks} from '../../styles/About-styles'
import {Container, Content, Heading, Paragraph} from '../../styles/GlobalStyles'
import { faJs, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { motion } from "framer-motion";
import {PostgreSQL, Django} from '../../svg/svgIcons'



const About = () => {
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

  const listVariants = {
    hidden: {
    },
    visible: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: {
      y:-50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 90,
      }
    }
  }

  useEffect(() => {
    document.title = "About Me"
  
  }, [])
  

  return (
    <Content variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <Heading>
        About Me
      </Heading>
      <Container>
          <Paragraph>
            The name is Saif eldeen Adel and I’m a college student who's teaching himself how to code. From being introduced to programming in high school to it being the only thing I want to do, I'd say I've come a long way. Got into web development pretty early in my journey so I've gathered up some pretty good experience since then. Creating backends primarily with Django and currently in the process of learning NodeJS-Express to broaden my backend knowledge for the market out there. As for frontend frameworks, I use React exclusively for the time being as it helps me design modern/sleek UI/UX for my apps but I am no where near mastering it given how vast it can get. 
          </Paragraph>
          {/* <Image src="https://i.ibb.co/GQr5cDJ/headshot.jpg" alt="headshot" /> */}
          {/* <Frameworks variants={frameworkVariants}>
            <Framework icon={faPython} />
            <Framework icon={faJs} />
            <Framework icon={faDatabase} />

          </Frameworks> */}
          <Paragraph>
            Besides web development and design, I am also interested in machine learning and artificial intelligence in general so I'm currently taking a deep dive into things like data science, reinforcement learning with neural networks, etc and hoping to work on projects centered around them soon. And given how common AI is becoming in various technologies nowadays, I also wish to incorporate some AI aspects (dealing with data science) in my web projects in the near future. 
            
          </Paragraph>
          <Paragraph>
            To follow me along this journey and to find out more about what I can do, check out the Projects section up there and have a look at the Coding Challenges section as well, maybe you'd like to have a go at some of these, haha! And if you wish to contact me, dont hesitate! 
          </Paragraph>

          <Frameworks variants={listVariants}>
            <motion.div variants={itemVariants}><Framework icon={faPython}/></motion.div>
            <motion.div variants={itemVariants}><Framework icon={faReact}/></motion.div>
            <motion.div variants={itemVariants}><Framework icon={faJs}/></motion.div>
            <motion.div variants={itemVariants}><Django /></motion.div>
            <motion.div variants={itemVariants}><PostgreSQL /></motion.div>
            <motion.div variants={itemVariants}><Framework icon={faNodeJs}/></motion.div>


            
          </Frameworks>

      </Container>

    </Content>
  )
}

export default About
