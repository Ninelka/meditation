import React from 'react'
import styled from 'styled-components'

import MusicBg from '../images/music/music-bg.svg';
import MusicImg from '../images/music/music-image.svg';
import MusicPlateBg from '../images/music/music-plate-bg.svg';
import MusicPlateIcon from '../images/music/music-plate-icon.svg';

const Container = styled.section`
    background-image: url(${MusicBg});
    background-position: top left;
    background-repeat: no-repeat;
`

const Wrapper = styled.div`
    max-width: 1620px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h2`
    font-family: "Merienda One";
    color: var(--text-primary);
    font-size: 54px;
    line-height: 130%;
    margin: 59px 0 22px;
    max-width: 530px;
`

const PlateTitle = styled.h3`
    font-family: "Heebo";
    font-weight: 500;
    color: rgba(0,0,0,0.8);
    font-size: 32px;
    line-height: 47px;
    margin-bottom: 10px;
`

const Text = styled.p`
    font-family: "Heebo";
    color: var(--text-secondary);
    font-size: 24px;
    line-height: 130%;
    max-width: 1105px;
`

const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 70px 0 94px;
`

const PlateList = styled.div`
    text-align: center;
`

const PlateContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    min-width: 650px;
    background-image: url(${MusicPlateBg});
    background-repeat: no-repeat;
    box-shadow: -26px 4px 79px rgba(168, 207, 202, 0.39);
    padding: 32px 40px;
    border-radius: 15px;
    margin-bottom: 50px;

    :last-child {
        margin-bottom: 0;
    }
`

const Button = styled.button`
    width: 80px;
    height: 80px;
    box-shadow: 0px 25px 30px rgba(179, 228, 221, 0.3), 0px 9px 24px rgba(26, 127, 114, 0.23);
    background-image: url(${MusicPlateIcon});
    background-position: center;
    background-repeat: no-repeat;
    border: none;
    border-radius: 50%;
    cursor: pointer;
`

const Image = styled.img`
    transform: scale(1.4);
`

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
                            <PlateContainer>
                                <div>
                                    <PlateTitle>{item.title}</PlateTitle>
                                    <Text>{item.text}</Text>
                                </div>
                                <Button></Button>
                            </PlateContainer>
                        ))}
                    </PlateList>
                    <Image width="696px" height="679px" src={MusicImg} alt="yoga family"></Image>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default Music