import React from 'react'
import { ReactSVG } from 'react-svg'
import { Container, Wrapper, CardContainer, CardList, CardTitle, Card, Row, Text, Title, Arrow, YogaWoman } from './styles';
import PracticeImg from '../../images/practice/practice-image.svg';
import ArrowIcon from '../../images/practice/arrow.svg';

const data = [
    {
        title: 'Meditation Wind',
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected.'
    },
    {
        title: 'Strees Reduction',
        text: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally can procure him some great pleasure.'
    },
    {
        title: 'Self Compassion',
        text: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s'
    }
]

const Practice = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Practice Wherever You Want, Whenever You Need</Title>
                <Text className="with-margin">“These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best.”</Text>
                <Row>
                    <YogaWoman>
                        <ReactSVG src={PracticeImg} />
                    </YogaWoman>
                    <CardList>
                        {data.map(item => (
                            <CardContainer key={item.title}>
                                <Card>
                                    <CardTitle>{item.title}</CardTitle>
                                    <Text>{item.text}</Text>
                                </Card>
                                <Arrow className="arrow" width="102px" height="24px" src={ArrowIcon} alt="arrow right"/>
                            </CardContainer>
                        ))}
                    </CardList>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default Practice
