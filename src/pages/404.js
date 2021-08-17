import * as React from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from 'styled-components'
import { ReactSVG } from 'react-svg'
import Button from '../components/button';
import meditatingWoman from '../images/common/meditating-woman.svg';

// styles
const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }
`
const Container = styled.main`
	width: 100vw;
	height: 100vh;
    display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: rgba(59, 209, 187, 0.09);
`
const Title = styled.h1`
    font-family: "Merienda One";
    color: #1A7F72;
    font-size: 137px;
	margin: 0;
`

const Text = styled.span`
	font-family: "Merienda One";
    color: #1A7F72;
    font-size:96px;
`

const MeditatingWoman = styled.div`
    margin: 52px 0;

	svg {
		max-width: 400px;
    	max-height: 378px;
	}

    .container {
        text-align: center;
        padding: 58px 0;
    }

    #atom-section-2 {
    	animation: lines-left 20s infinite linear;
    }

    #atom-section {
      	animation: lines-right 20s infinite linear;
    }

    #woman {
      	animation: levitating-woman 2s infinite;
    }

    @keyframes lines-left {
		0% {
			transform: rotate(360deg);
			transform-origin: center center;
		}
		
		100% {
			transform: rotate(0deg);
			transform-origin: center center;
		}
    }

    @keyframes lines-right {
		0% {
			transform: rotate(0deg);
			transform-origin: center center;
		}
		
		100% {
			transform: rotate(360deg);
			transform-origin: center center;
		}
    }

    @keyframes levitating-woman {
		0% {
			transform: translateY(10px);
		}
		50% {
			transform: translateY(30px);
		}
		100% {
			transform: translateY(10px);
		}
    }
`

// markup
const NotFoundPage = () => {
	return (
		<Container>
			<GlobalStyles />
			<Title>
				404
			</Title>
			<Text>
				Page not found
			</Text>
			<MeditatingWoman>
				<ReactSVG src={meditatingWoman} />
			</MeditatingWoman>
			<Link to="/">
				<Button isBig="true" text="Go to home"></Button>
			</Link>
		</Container>
	)
}

export default NotFoundPage
