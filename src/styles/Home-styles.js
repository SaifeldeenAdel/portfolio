import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "./GlobalStyles";

const HomeContainer = styled(motion.div) `
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-60%);

  html.sr .load-hidden {
    visibility: hidden;
  }

  @media ${device.mobile} {
    align-items: flex-start;
    margin-top: 2em;
  }
`

const Title = styled(motion.div) `
  margin: 0;
  color: var(--dark);
  font-size: clamp(4rem, 1rem + 10vw, 5rem);
  font-weight:700;
  display:flex;

  @media ${device.mobile} {
    flex-direction: column;
  }
`
const Hi = styled(motion.div) `
  
`

const Name = styled(motion.div) `
  margin-left: 0.125em;
  
  @media ${device.mobile} {
    margin-top: -0.35em;
    margin-left: 0;

  }
`

const Subtitle = styled(motion.p) `

  margin-top: 0;
  font-family: var(--sans-serif-2);
  font-size: 1.125rem;
  font-weight: 300;

  @media ${device.mobile} {
    margin-left: 0.3em;
    font-size: 1rem;
  }
`

const ButtonContainer = styled(motion.div) `
  margin-top: 2.5em;

  @media ${device.mobile} {
    margin-top: 5em;
    margin-left: 0.3em;
  }
`

const TitleButton = styled(Link) `
  background: none;
  border: none;
  text-decoration: none;
  color: white;
  cursor: pointer;

  font-family: var(--serif);
  font-weight: 800;
  font-size: 1.125rem;
  letter-spacing: 3px;
  padding: 0.6em 1em;


  position: relative;
  transition: 0.2s ease-in-out;

  &:hover {
    color: var(--dark);
    ${'' /* letter-spacing: 2px; */}

    &::after {
      height: 0%;
    }
  }

  &::after {
    content: '';
    position: absolute;
    background: var(--dark);
    z-index: -1;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    transition: height 0.2s ease-in-out
  }

  @media ${device.mobile}{
    font-size: 1rem;
  }
  
`


export {Title, Hi, Name, HomeContainer, Subtitle, TitleButton, ButtonContainer}