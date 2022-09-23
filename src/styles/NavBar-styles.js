import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "./GlobalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = styled(motion.nav)`
  box-sizing: border-box;
  /* position: fixed;
  top: 0;
  width: inherit;
  background-color: var(--bg-projects);
  max-width: inherit;
  padding: inherit;
  padding-top: 3em;
  padding-bottom: 1em; */
  
	width: 100%;
  padding-top: 5em;
  padding-bottom: 5em;


	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const NavToggle = styled(motion.button)`
  display: none;
  
  @media ${device.mobile} {
    display: block;
    z-index: 9999;
    position: absolute;
    background: none;
    border: none;
    width: 2em;
    aspect-ratio: 1;
    top: 5.3rem;
    right: 2.5rem;
  }

  &:hover {
    cursor: pointer;
  }


`

const Icon = styled(FontAwesomeIcon) `
  height: 1.7em;
`

const Logo = styled(NavLink)`
	font-weight: 800;
	font-size: 1.6rem;
	text-decoration: none;
	color: var(--dark);
	cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
	.active {
    &::after {
      color: var(--dark);
			width: 100%;
			height: 3%;
			background-color: black;
			content: "";
			position: absolute;
			left: 0;
			top: 110%;
		}
	}

  @media ${device.mobile}{
    z-index: 1000;
    position: fixed;
    inset: 0 0 0 30%;
    background: hsl(120, 18%, 79%, 0.9);
    backdrop-filter: blur(0.4rem);
    flex-direction: column;
    padding: min(30vh, 10rem) 2rem;
    transform: translateX(100%);
    transform: ${props => props.visible ? 'translateX(0%);' : 'translateX(100%);'};
    transition: transform 200ms ease-in;

    .active{
      font-weight: 600;
      &::after {
        content: none;
      }
    }
  }
`;

const StyledNavLink = styled(NavLink)`
	position: relative;
	font-family: var(--sans-serif);
	font-weight: 200;
	font-size: 1.2rem;
	color: black;
	text-decoration: none;
	cursor: pointer;
	margin: 0 1em;

	&::after {
		width: 0%;
		height: 3%;
		background-color: black;
		content: "";
		position: absolute;
		left: 0;
		top: 110%;
    transition: width 0.3s ease-in-out;
	}

	&:hover {
		&::after {
			width: 100%;
      
		}
	}
  @media ${device.mobile} {
    margin: 0.6em 0 ;

    &::after {
      content: none;
    }
  }
`;

export { Nav, Logo, NavLinks, StyledNavLink, NavToggle, Icon };
