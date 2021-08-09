import React from 'react'
import startPicture from '../images/start-picture.svg';
import Button from '../components/button';
import styled from "styled-components"

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    background-image: url(images/main-bg.svg);
    background-position: top center;
`
const Title = styled.h1`
    font-family: "Merienda One";
    font-weight: bold;
    color: white;
    font-size: 68px;
    margin: 0 0 22px;
`

const Text = styled.span`
    font-family: "Heebo";
    color: var(--text-secondary);
    font-size: 24px;
    margin: 0 0 30px;
`

const MeditatingWoman = styled.img`
    margin-top: 70px;
`

const StartSection = () => {
    return (
        <Wrapper>
            <Title>
                Meditations Helps You Detoxify Your Body
            </Title>
            <Text>
                “It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout point of using Lorem Ipsum is that it has a more-or-less.”
            </Text>
            <Button isBig="true" text="Get Start"></Button>
            <MeditatingWoman width="590px" height="558px" src={startPicture} alt="meditating woman"></MeditatingWoman>
        </Wrapper>
    )
}

export default StartSection;