import React from 'react'

import MusicImg from '../../images/music/music-image.svg';
import { Container, Wrapper, PlateContainer, PlateList, PlateTitle, Row, Title, Text, Button, Image } from './styles';

const data = [
    {
        title: 'Turning off Auto Pilot',
        text: 'Intriduction, Strees Assesment'
    },
    {
        title: 'Crazy Wind Sound',
        text: 'Relex Mind'
    },
    {
        title: 'Mental Wellness',
        text: 'Strees Relief'
    }
]

const Music = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Take a Deep Breath</Title>
                <Text>“Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.”</Text>
                <Row>
                    <PlateList>
                        {data.map(item => (
                            <PlateContainer key={item.title}>
                                <div>
                                    <PlateTitle>{item.title}</PlateTitle>
                                    <Text>{item.text}</Text>
                                </div>
                                <Button aria-label={item.title}/>
                            </PlateContainer>
                        ))}
                    </PlateList>
                    <Image width="696px" height="679px" src={MusicImg} alt="yoga family"/>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default Music
