import styled from 'styled-components'

import MusicBg from '../../images/music/music-bg.svg';
import MusicPlateBg from '../../images/music/music-plate-bg.svg';
import MusicPlateIcon from '../../images/music/music-plate-icon.svg';

const Container = styled.section`
    background-image: url(${MusicBg});
    background-position: top left;
    background-size: 100% auto;
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
    margin: 59px 0 22px;
    max-width: 530px;

    @media screen and (max-width: 767px) {
        font-size: 24px;
        margin: 38px 12px 12px;
    }
`

const PlateTitle = styled.h3`
    font-family: "Heebo";
    font-weight: 500;
    color: rgba(0,0,0,0.8);
    font-size: 32px;
    line-height: 47px;
    margin-bottom: 10px;

    @media screen and (max-width: 1439px) {
        font-size: 24px;
        line-height: 28px;
    }

    @media screen and (max-width: 424px) {
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
    margin: 0 16px;

    @media screen and (max-width: 767px) {
        font-size: 14px;
        line-height: 26px;
    }
`

const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 70px 12px 94px;

    @media screen and (max-width: 1919px) {
        justify-content: center;

        img {
            max-width: 60%;
            height: auto;
        }
    }

    @media screen and (max-width: 1199px) {
        img {
            max-width: 50%;
        }
    }

    @media screen and (max-width: 1023px) {
        flex-direction: column-reverse;

        img {
            max-width: 70%;
        }
    }
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

    @media screen and (max-width: 1919px) {
        ${Text} {
            margin: 0;
        }
    }

    @media screen and (max-width: 1439px) {
        min-width: 30%;

        ${Text} {
            font-size: 18px;
            line-height: 28px;
        }
    }

    @media screen and (max-width: 424px) {
        min-height: 100px;
        padding: 15px 25px;
        background-size: cover;
        border-radius: 10px;
        margin: 0 16px 32px;

        ${Text} {
            font-size: 14px;
            line-height: 26px;
        }
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
    flex-shrink: 0;
    cursor: pointer;

    :hover {
        box-shadow: 0px 25px 30px rgba(179, 228, 221, 0.5), 0px 9px 24px rgba(26, 127, 114, 0.83);
    }
    
    @media screen and (max-width: 767px) {
        width: 60px;
        height: 60px;
        margin-left: 16px;
    }
`

const Image = styled.img`
    transform: scale(1.4);

    @media screen and (max-width: 1919px) {
        transform: scale(1);
    }
`
export { Container, Wrapper, PlateContainer, PlateList, PlateTitle, Row, Title, Text, Button, Image };
