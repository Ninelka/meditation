import React from 'react'

import { Container, Wrapper, TextWrapper, Text, Title, Row, PlateContainer, PlateList, PlateTitle } from './styles';
import MeditationImage from '../../images/meditation/meditation-image.svg';

const colLeftData = [
    {
        title: 'The Peace',
        text: 'which of us ever undertakes laborious physical exercise, except to obtain some advantage from it.'
    },
    {
        title: 'Strength Building',
        text: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore.'
    },
    {
        title: 'Quick Relextion',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    }
]

const colRightData = [
    {
        title: 'Relex & Refresh',
        text: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour.'
    },
    {
        title: 'Beauty Of Body',
        text: 'Various versions have evolved over the years  sometimes by accident sometimes on purpose injected humour and the like.'
    },
    {
        title: 'Strees Relief',
        text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.'
    },
]

const Meditation = () => {
    return (
        <Container>
            <Wrapper>
                <Title>The Best Of Meditation</Title>
                <Text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</Text>
                <Row>
                    <PlateList>
                        {colLeftData.map(item => (
                            <PlateContainer key={item.title}>
                                <PlateTitle>{item.title}</PlateTitle>
                                <TextWrapper>
                                    <Text>{item.text}</Text>
                                </TextWrapper>
                            </PlateContainer>
                        ))}
                    </PlateList>
                    <img width="339px" height="802px" src={MeditationImage} alt="meditating woman"/>
                    <PlateList>
                        {colRightData.map(item => (
                            <PlateContainer className="is-reverse" key={item.title}>
                                <PlateTitle>{item.title}</PlateTitle>
                                <TextWrapper>
                                    <Text>{item.text}</Text>
                                </TextWrapper>
                            </PlateContainer>
                        ))}
                    </PlateList>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default Meditation
