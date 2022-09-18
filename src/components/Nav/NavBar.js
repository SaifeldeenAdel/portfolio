import React from 'react'
import { Logo, Nav, NavLinks, StyledNavLink } from '../../styles/NavBar-styles'

const NavBar = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: {ease: "easeInOut", duration: 0.5}
    }
  }

  return (
    <Nav variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <Logo to="/">saif</Logo>
      <NavLinks>
        <StyledNavLink to="about">About Me</StyledNavLink>
        <StyledNavLink to="projects">Projects</StyledNavLink>
        <StyledNavLink to="contact">Get in touch</StyledNavLink>
      </NavLinks>
    </Nav>
  )
}

export default NavBar
