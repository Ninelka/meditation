import React from 'react'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

import PracticeBg from '../images/practice/practice-bg.svg';
import PracticeImg from '../images/practice/practice-image.svg';
import ArrowIcon from '../images/practice/arrow.svg';

const Container = styled.section`
    background-image: url(${PracticeBg});
    background-position: bottom right;
    background-repeat: no-repeat;
`

const Wrapper = styled.div`
    max-width: 1620px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1919px) {
        max-width: 100%;
    }
`

const Title = styled.h2`
    font-family: "Merienda One";
    color: var(--text-primary);
    font-size: 54px;
    line-height: 130%;
    margin: 77px 0 22px;
    max-width: 706px;

    @media screen and (max-width: 767px) {
        font-size: 24px;
        margin: 38px 12px 12px;
    }
`

const CardTitle = styled.h3`
    font-family: "Heebo";
    font-weight: 500;
    color: rgba(0,0,0,0.8);
    font-size: 32px;
    line-height: 47px;
    margin-bottom: 10px;

    @media screen and (max-width: 767px) {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 0;
    }
`

const Text = styled.p`
    font-family: "Heebo";
    color: var(--text-secondary);
    font-size: 24px;
    line-height: 130%;
    max-width: 1105px;

    @media screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 20px;

        &.with-margin {
            margin: 0 12px;
        }
    }
`

const Row = styled.div`
    width: 100%;
    display: flex;
    margin: 70px 0 16px;

    @media screen and (max-width: 1919px) {
        justify-content: space-evenly;
        align-items: center;

        svg {
            max-width: 60%;
            height: auto;
        }
    }

    @media screen and (max-width: 1023px) {
        flex-wrap: wrap;
        max-width: 100%;
    }
`

const CardList = styled.div`
    text-align: center;
    margin-left: 165px;

    @media screen and (max-width: 1919px) {
        margin-left: auto;
    }
`

const CardContainer = styled.div`
    position: relative;
    text-align: left;
    min-width: 619px;
    padding: 35px 71px 45px 40px;
    border-radius: 15px;
    cursor: pointer;
    transition: box-shadow 0.5s ease-in-out,
                background-color 0.5s ease-in-out,
                transform 1s linear;

    :hover {
        background-color: white;
        box-shadow: 0px 8px 50px rgba(26, 127, 114, 0.2);

        .arrow {
            opacity: 1;
            animation: arrowMove 1s 1;

            @keyframes arrowMove {
                from {
                    transform: translateX(-310px);
                }

                to {
                    transform: translateX(0px);
                }
            }
        }
    }

    @media screen and (max-width: 1919px) {
        margin: 0 24px;
    }

    @media screen and (max-width: 1439px) {
        min-width: auto;
    }

    @media screen and (max-width: 424px) {
        max-width: 100%;
    }
`

const Arrow = styled.img`
    position: absolute;
    bottom: 23px;
    right: 70px;
    opacity: 0;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
`

const YogaWoman = styled.div`

    @media screen and (max-width: 1919px) {
        min-width: 50%;

        svg {
            width: 100%;
            height: 100%;
        }
    }

    @media screen and (max-width: 1023px) {

        svg {
            width: 60%;
            height: 60%;
        }
    }
`

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
                                <Arrow className="arrow" width="102px" height="24px" src={ArrowIcon} alt="arrow right"></Arrow>
                            </CardContainer>
                        ))}
                    </CardList>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default Practice