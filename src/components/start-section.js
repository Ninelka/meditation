import React from 'react'
import meditatingWoman from '../images/common/meditating-woman.svg';
import startBg from '../images/start/start-bg.svg';
import { ReactSVG } from 'react-svg'
import Button from '../components/button';
import styled from "styled-components"

const Container = styled.section`
    background-image: url(${startBg});
    background-repeat: no-repeat;
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

    @media screen and (max-width: 1919px) {
        max-width: 100%;
    }
`
const Title = styled.h1`
    font-family: "Merienda One";
    font-weight: bold;
    color: white;
    font-size: 68px;
    max-width: 790px;
    margin: 70px 12px 22px;

    @media screen and (max-width: 767px) {
        font-size: 28px;
        margin: 30px 12px 12px;
    }
`

const Text = styled.span`
    font-family: "Heebo";
    color: var(--text-secondary);
    font-size: 24px;
    max-width: 1109px;
    margin: 0 16px 30px;

    @media screen and (max-width: 767px) {
        font-size: 14px;
    }
`

const MeditatingWoman = styled.div`
    margin-top: 70px;

    @media screen and (max-width: 1023px) {
        margin-top: 30px;

        svg {
            width: 60%;
            height: 60%;
        }
    }

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
                    <ReactSVG src={meditatingWoman} />
                </MeditatingWoman>
            </Wrapper>
        </Container>
    )
}

export default StartSection;