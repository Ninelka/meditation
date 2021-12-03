import React from 'react'
import Button from '../button/button';
import meditatingWoman from '../../images/common/meditating-woman.svg';
import { ReactSVG } from 'react-svg'
import { Container, Wrapper, Title, Text, MeditatingWoman } from './styles';

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
                <Button isBig="true" text="Get Start"/>
                <MeditatingWoman>
                    <ReactSVG src={meditatingWoman} />
                </MeditatingWoman>
            </Wrapper>
        </Container>
    )
}

export default StartSection;
