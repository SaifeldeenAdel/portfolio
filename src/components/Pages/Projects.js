import React, { useEffect } from 'react'
import {Content, Heading} from '../../styles/GlobalStyles'
import { ProjectsContainer, Project, ProjectLink, ProjectTitle, Description, ProjectContent, ProjectImage, ProjectInfo, Icon, LinkContainer} from '../../styles/Project-styles'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import FoodieImage from '../../thumbnails/foodie.png'
import FinanceeImage from '../../thumbnails/financee.png'
import PortfolioImage from '../../thumbnails/portfolio.png'




const Projects = () => {

  useEffect(() => {
    document.title= "Projects"
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

  const projectContainerVariants = {
    hidden: {
    },
    visible: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.5
      }
    }

  }

  const project = {
    hidden: {
      x:-50,
      opacity: 0,
    },
    visible: {
      x:0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 30,
      }
    }

  }

  return (
    <Content variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <Heading>
        Projects
      </Heading>
      <ProjectsContainer variants={projectContainerVariants} >
        <Project variants={project}>
          <ProjectContent>
            
            <ProjectImage src={FoodieImage} alt="foodie" bright/>
            <ProjectInfo>
              <ProjectTitle>Foodie</ProjectTitle>
              <Description>A recipe lookup website that allows users to get recipe results from all of the top food websites all at once while also giving them the ability to save recipes from different websites in one place. Built using Flask, SQLAlchemy and HTML/CSS. </Description>
              <LinkContainer>
                <div>
                  <Icon icon={faGithub} />
                  <ProjectLink target="_blank" href='https://github.com/SaifeldeenAdel/Foodie-CS50x-Final-Project'> Project Repository</ProjectLink>
                  
                </div>
                
                <div>
                  <Icon icon={faPlay} />
                  <ProjectLink target="_blank" href='https://youtu.be/bOZLUuMobsw'>&nbsp; Video Demo</ProjectLink>

                </div>
              </LinkContainer>

            </ProjectInfo>
          </ProjectContent>
        </Project>
        <Project variants={project}>
          <ProjectContent>
            <ProjectImage src={FinanceeImage} alt="financee" />
            <ProjectInfo>
              <ProjectTitle>Financee</ProjectTitle>
              <Description>A trade and risk management web app made for investors to help keep track of their trades and make crucial calculations regarding trades. Built using Django, mySQL, React and Market API.</Description>
              <LinkContainer>
                <div>
                  <Icon icon={faGithub} />
                  <ProjectLink target="_blank" href='https://github.com/SaifeldeenAdel/Financee-CS50w-Final-Project'> Project Repository</ProjectLink>
                  
                </div>
                
                <div>
                  <Icon icon={faPlay} />
                  <ProjectLink target="_blank" href='https://youtu.be/vq28Q0ytlpQ'>&nbsp; Video Demo</ProjectLink>

                </div>
              </LinkContainer>

            </ProjectInfo>
          </ProjectContent>
        </Project>

        <Project variants={project}>
          <ProjectContent>
            <ProjectImage src={PortfolioImage} alt="portfolio" />
            <ProjectInfo>
              <ProjectTitle>Personal Portfolio</ProjectTitle>
              <Description>This portfolio you're browsing right now was fully designed and implemented by me. Built using React. Libraries that made this project come to life are framer-motion and styled-components.</Description>
              <LinkContainer>
                <div>
                  <Icon icon={faGithub} />
                  <ProjectLink target="_blank" href='https://github.com/SaifeldeenAdel/Financee-CS50w-Final-Project'> Project Repository</ProjectLink>
                  
                </div>
                
              </LinkContainer>

            </ProjectInfo>
          </ProjectContent>
        </Project>
        
        <Project variants={project}>
          <ProjectContent>
            <ProjectImage src={PortfolioImage} alt="financee" blur />
            <ProjectInfo>
              <ProjectTitle>Coming Soon....</ProjectTitle>
              <Description></Description>
              <LinkContainer>
              </LinkContainer>

            </ProjectInfo>
          </ProjectContent>
        </Project>
        
        
      </ProjectsContainer>

    </Content>
  )
}

export default Projects
