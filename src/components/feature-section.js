import React from 'react'
import styled from 'styled-components'
import Button from './button';

import meditationIcon from '../images/feature/ic_meditation.svg';
import meditationBg from '../images/feature/feature-meditation-bg.svg';
import yogaIcon from '../images/feature/ic_yoga.svg';
import yogaBg from '../images/feature/feature-yoga-bg.svg';
import soundIcon from '../images/feature/ic_sound.svg';
import soundBg from '../images/feature/feature-sound-bg.svg';

const Container = styled.section`
    max-width: 1620px;
    margin: 0 auto;
`

const Row = styled.div`
    display: flex;
    margin: 120px 0 40px;

    @media screen and (max-width: 1920px) {
        flex-wrap: wrap;
        justify-content: space-evenly;

        img {
            width: 50%;
            height: 50%;
        }
    }

    @media screen and (max-width: 767px) {
        margin: 60px 0 20px;
    }
`
const CardContainer = styled.div`
    background-image: url(${props => props.bg});
    background-position: top center;
    background-size: contain;
    background-repeat: no-repeat;
    min-width: 520px;
    min-height: 650px;
    margin-right: 80px;

    :last-child {
        margin-right: 0;
    }

    @media screen and (max-width: 1920px) {
        margin-right: 0;
    }

    @media screen and (max-width: 1023px) {
        background-color: white;
        border-radius: 20px;
        background-image: none;
        min-width: 250px;
        min-height: auto;
        margin-bottom: 40px;
    }
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0;

    @media screen and (max-width: 1920px) {

        img {
            width: 50px;
            height: 50px;
        }
    }

    @media screen and (max-width: 767px) {
        padding: 30px 0;

        img {
            width: 30px;
            height: 30px;
        }
    }
`


const Title = styled.h3`
    font-family: "Heebo";
    font-weight: 500;
    color: var(--text-primary);
    font-size: 32px;
    line-height: 47px;
    margin: 20px 0;

    @media screen and (max-width: 767px) {
        font-size: 24px;
        line-height: 24px;
    }
`

const Text = styled.p`
    font-family: "Heebo";
    color: var(--text-primary);
    font-size: 18px;
    line-height: 130%;
    text-align: center;
    margin-bottom: 60px;
    max-width: 324px;

    @media screen and (max-width: 1920px) {
        margin: 0 12px 20px;
    }

    @media screen and (max-width: 767px) {
        font-size: 14px;
        max-width: 150px;
    }
`

const data = [
    {
        title: 'Meditation',
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
        icon: meditationIcon,
        background: meditationBg
    },
    {
        title: 'Yoga',
        text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        icon: yogaIcon,
        background: yogaBg
    },
    {
        title: 'Sound',
        text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.',
        icon: soundIcon,
        background: soundBg
    }
]

const FeatureSection = () => {
    return (
        <Container>
            <Row>
                {data.map(feature => (
                    <CardContainer bg={feature.background} key={feature.title}>
                        <Card>
                            <img width="100px" height="100px" src={feature.icon} alt="icon"></img>
                            <Title>{feature.title}</Title>
                            <Text>{feature.text}</Text>
                            <Button text="Learn More"></Button>
                        </Card>
                    </CardContainer>
                ))}
            </Row>
        </Container>
    )
}

export default FeatureSection