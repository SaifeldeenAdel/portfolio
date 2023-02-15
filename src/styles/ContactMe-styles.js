import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { device } from "./GlobalStyles";


const ContactsContainer = styled(motion.div) `
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.5em;
  background-color: #E8F3E8;
  padding: 1em;
  border-radius: 1em;
  transition: 0.5s ease-in-out;


  &:hover{
    background-color: #CEDFCE;
  }

  @media ${device.mobile} {
    padding: 0.6em;
    margin-top: 1.5em;

  }
  
`

const Contact = styled(motion.div) `
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 1em;

`

const Icon = styled(FontAwesomeIcon) `
  height: 2.6em;
  margin-right: 1em;
  width: 2.6em;

  @media ${device.mobile} {
    height: 2em;
    width: 2em;

  }
`

const ContactLink = styled.a`
  text-decoration: none;
  color: var(--dark);
  font-family: var(--sans-serif);
  font-weight: 300;

`

export {ContactsContainer, Contact, Icon, ContactLink}