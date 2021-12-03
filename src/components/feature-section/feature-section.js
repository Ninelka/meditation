import React from 'react'
import Button from '../button/button';
import { Container, Row, Card, CardContainer, Title, Text } from './styles';

import meditationIcon from '../../images/feature/ic_meditation.svg';
import meditationBg from '../../images/feature/feature-meditation-bg.svg';
import yogaIcon from '../../images/feature/ic_yoga.svg';
import yogaBg from '../../images/feature/feature-yoga-bg.svg';
import soundIcon from '../../images/feature/ic_sound.svg';
import soundBg from '../../images/feature/feature-sound-bg.svg';

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
                            <img width="100px" height="100px" src={feature.icon} alt="icon"/>
                            <Title>{feature.title}</Title>
                            <Text>{feature.text}</Text>
                            <Button text="Learn More"/>
                        </Card>
                    </CardContainer>
                ))}
            </Row>
        </Container>
    )
}

export default FeatureSection
