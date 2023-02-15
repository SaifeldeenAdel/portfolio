import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "./GlobalStyles";

const ProjectsContainer = styled(motion.div)`
	padding-top: 30px;
	width: 100%;
`;
const Project = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin-bottom: 4em;

	&:after {
		content: "";
		margin-top: 50px;
		right: 0;
		height: 2px;
		width: 70%;
		background-color: black;
		position: relative;

		@media ${device.mobile} {
			margin-top: 3em;
		}
	}
`;

const ProjectContent = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;

	@media ${device.tablet} {
		flex-direction: column-reverse;
	}
`;

const ProjectImage = styled.img`
	max-width: 19em;
	height: auto;
	border: 1px solid black;
	margin-right: 50px;
  filter: ${props => props.bright ? 'brightness(110%)' : ''};
  filter: ${props => props.blur ? 'blur(2px)' : ''};


	@media ${device.tablet} {
		margin-right: 0px;
		margin-top: 1.5em;
		max-width: 18em;
	}

	@media ${device.mobile} {
		max-width: 15em;
	}
`;

const ProjectInfo = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: flex-start;
	max-width: 55%;
	margin-bottom: 10px;

	@media ${device.tablet} {
		max-width: 70%;
	}

	@media ${device.mobile} {
		max-width: 90%;
	}
`;

const ProjectTitle = styled.h1`
	margin: 0;
	margin-left: -1px;

	@media ${device.mobile} {
		font-size: 1.7em;
	}
`;

const Description = styled.p`
	margin-top: 0.8em;
	font-family: var(--sans-serif);
	font-weight: 200;
	font-size: 1em;
	text-align: justify;
	width: 100%;
	overflow-wrap: break-word;

	@media ${device.mobile} {
		font-size: 0.9em;
	}
`;

const LinkContainer = styled.div`
	display: flex;

	@media ${device.mobile} {
		margin-top: 1em;
		flex-direction: column;
	}
`;

const ProjectLink = styled.a`
	font-family: var(--sans-serif);
	font-size: 0.9em;
	font-weight: 700;
	text-decoration: none;
	color: black;
	margin-right: 30px;

	@media ${device.mobile} {
		font-size: 0.8em;
	}
`;

const Icon = styled(FontAwesomeIcon)`
	font-size: 1.1rem;
	margin-right: 10px;

	@media ${device.mobile} {
		margin-right: 10px;
	}
`;
export {
	ProjectsContainer,
	Project,
	ProjectInfo,
	ProjectLink,
	ProjectImage,
	ProjectTitle,
	Description,
	LinkContainer,
	ProjectContent,
	Icon,
};
