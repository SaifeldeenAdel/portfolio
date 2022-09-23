import React, { useState, useEffect } from 'react'
import { Logo, Nav, NavLinks, StyledNavLink, NavToggle, Icon } from '../../styles/NavBar-styles'
import {faBars, faMinus } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  const [toggle, setToggle] = useState(false)

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: {ease: "easeInOut", duration: 0.2}
    }
  }

  return (
    <>
    
      <Nav variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <NavToggle onClick={() => setToggle(!toggle)} ><Icon icon={toggle ? faMinus : faBars}></Icon></NavToggle>
        <Logo to="/">saif</Logo>
        <NavLinks visible={toggle}>
          <StyledNavLink onClick={() => setToggle(!toggle)} to="about">About Me</StyledNavLink>
          <StyledNavLink onClick={() => setToggle(!toggle)} to="projects">Projects</StyledNavLink>
          <StyledNavLink onClick={() => setToggle(!toggle)} to="contact">Get in touch</StyledNavLink>
        </NavLinks>

      </Nav>

    </>
  )
}

export default NavBar
