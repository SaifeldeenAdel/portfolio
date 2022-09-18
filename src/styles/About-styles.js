import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "./GlobalStyles";

const Image = styled.img `
  width: 20%;
  height: 100%;
`

const Frameworks = styled(motion.div) `
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 3em;
  margin-bottom: 3em;

  @media ${device.mobile} {
    flex-wrap: wrap;
  }

`
const Framework = styled(FontAwesomeIcon) `
  font-size: 3.5rem;

  @media ${device.mobile} {
    font-size: 2.5rem;
  }
`

export {Image, Frameworks, Framework}