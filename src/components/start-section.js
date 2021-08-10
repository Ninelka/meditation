import React from 'react'
import startPicture from '../images/start-picture.svg';
import startBg from '../images/main-bg.svg';
import { ReactSVG } from 'react-svg'
import Button from '../components/button';
import styled from "styled-components"

const Container = styled.section`
    background-image: url(${startBg});
    background-position: top center;
    background-size: 100% auto;
`

const Wrapper = styled.div`
    max-width: 1109px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
`
const Title = styled.h1`
    font-family: "Merienda One";
    font-weight: bold;
    color: white;
    font-size: 68px;
    max-width: 758px;
    margin: 70px 0 22px;
`

const Text = styled.span`
    font-family: "Heebo";
    color: var(--text-secondary);
    font-size: 24px;
    margin: 0 0 30px;
`

const MeditatingWoman = styled.div`
    margin-top: 70px;

    .container {
        text-align: center;
        padding: 58px 0;
    }

    #lines {
        
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

const StartSection = () => {
    return (
        <Container>
            <Wrapper>
                <Title>
                    Meditations Helps You Detoxify Your Body
                </Title>
                <Text>
                    “It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout point of using Lorem Ipsum is that it has a more-or-less.”
                </Text>
                <Button isBig="true" text="Get Start"></Button>
                <MeditatingWoman>
                    <ReactSVG src={startPicture} />
                </MeditatingWoman>
            </Wrapper>
        </Container>
    )
}

export default StartSection;