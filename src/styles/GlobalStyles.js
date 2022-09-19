import styled from "styled-components"
import { motion } from "framer-motion"

const device = {
  mobile: `(max-width: 30em)`,
  tablet: `(max-width: 50em)`
};

const Heading = styled.h1 `
  color: var(--dark);
  display: flex;
  flex-direction: column;
  align-items:center;
  margin: 0;
  margin-bottom: 0.5em;
  font-size: 3.5rem;
  font-weight: 700;

  @media ${device.tablet} {
    &:after {
    content: "";
    height: 1px;
    margin-top: 5px;
    background-color: black;
    width: 90%;
    }
  }

  @media ${device.mobile} {
    font-size: 3em;
    
  }
  
`


const Content = styled(motion.div) `
  display:flex;
  flex-direction:column;
  align-items: center;
  max-width: 50em;
  text-align: justify;
`

const Paragraph = styled(motion.p) `
  font-size: 1rem;
  font-family: var(--sans-serif);
  font-weight: 200;
  margin: 0.5em 0;

  @media ${device.mobile} {
    font-size: 1.0em;

    
  }
`

const Container = styled(motion.div) `
  display: flex;
  flex-direction: column;
  
`


export {Heading, Content, Paragraph, Container, device}