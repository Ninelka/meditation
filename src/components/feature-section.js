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
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0;
`


const Title = styled.h3`
    font-family: "Heebo";
    font-weight: 500;
    color: var(--text-primary);
    font-size: 32px;
    line-height: 47px;
    margin: 20px 0;
`

const Text = styled.p`
    font-family: "Heebo";
    color: var(--text-primary);
    font-size: 18px;
    line-height: 130%;
    text-align: center;
    margin-bottom: 60px;
    max-width: 324px;
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
                    <CardContainer bg={feature.background}>
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