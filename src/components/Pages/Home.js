import React, {useEffect} from "react";
import {
	Title,
	HomeContainer,
	Subtitle,
	TitleButton,
	Hi,
	Name,
	ButtonContainer,
} from "../../styles/Home-styles";

const Home = () => {
  useEffect(() => {
    document.title= "Home"
  }, [])
  
  const containerVariants = {
    hidden: {
      opacity: 1,
    },
    visible: {
    },
    exit: {
      opacity: 0,
      transition: {ease: "easeInOut", duration: 0.5}
    }

  }
	const hiVariants = {
		hidden: {
			opacity: 0,
			y: -30,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.5,
				duration: 0.5,
				ease: "easeInOut",
			},
		}
	};


	const nameVariants = {
		hidden: {
			opacity: 0,
			y: -20,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 1,
				duration: 0.5,
				ease: "easeInOut",
			},
		}
	};
  

	const subtitleVariants = {
		hidden: {
			opacity: 0,
			y: -10,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 1.5,
				duration: 0.5,
				ease: "easeInOut",
			},
		}
	};

  const buttonVariants = {
    hidden: {
			opacity: 0
		},
		visible: {
			opacity: 1,
			transition: {
				delay: 2.5,
				duration: 0.5,
				ease: "easeInOut",
			},
		}
  }
	return (
		<HomeContainer variants={containerVariants} initial="hidden" animate="visible" exit="exit">
			<Title>
				<Hi  variants={hiVariants} >Hi, </Hi>
				<Name  variants={nameVariants}>I'm Saif.</Name>
			</Title>
			<Subtitle variants={subtitleVariants} >
				I code stuff, I guess.
			</Subtitle>
			<ButtonContainer variants={buttonVariants}>
				<TitleButton to="/about">know more</TitleButton>
			</ButtonContainer>
		</HomeContainer>
	);
};

export default Home;
