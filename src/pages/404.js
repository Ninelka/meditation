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
	min-width: calc(100vw - 32px*2);
	min-height: calc(100vh - 40px*2);
	text-align: center;
    display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: rgba(59, 209, 187, 0.09);
	background-size: cover;
	padding: 40px 32px;

	@media screen and (max-width: 424px) {
        justify-content: flex-start;
    }
`
const Title = styled.h1`
    font-family: "Merienda One";
    color: #1A7F72;
    font-size: 120px;
	margin: 0;

	@media screen and (max-width: 1919px) {
        font-size: 100px;
    }

	@media screen and (max-width: 767px) {
        font-size: 80px;
    }
`

const Text = styled.span`
	font-family: "Merienda One";
    color: #1A7F72;
    font-size:90px;

	@media screen and (max-width: 1919px) {
        font-size:65px;
    }

	@media screen and (max-width: 767px) {
        font-size:45px;
    }
`

const MeditatingWoman = styled.div`
    margin: 32px 0;

	svg {
		max-width: 400px;
		max-height: 378px;
	}

	@media screen and (max-width: 1919px) {
		svg {
			max-width: 60%;
			max-height: auto;
		}
    }

	@media screen and (max-width: 424px) {
        svg {
			max-width: 100%;
		}
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
