import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "./GlobalStyles";

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

const Logo = styled(NavLink)`
	font-weight: 800;
	font-size: 1.6rem;
	text-decoration: none;
	color: var(--dark);
	cursor: pointer;
`;

const NavLinks = styled.div`
	.active {
		color: var(--dark);

		&::after {
			width: 100%;
			height: 3%;
			background-color: black;
			content: "";
			position: absolute;
			left: 0;
			top: 110%;
		}
	}

  @media ${device.tablet}{
    display: none;
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
`;

export { Nav, Logo, NavLinks, StyledNavLink };
