import styled from 'styled-components';
import MeditationBg from "../../images/meditation/meditation-bg.svg";
import MeditationPlateBg from "../../images/meditation/meditation-plate-bg.svg";
import MeditationPlateReverseBg from "../../images/meditation/meditation-plate-reverse-bg.svg";

const Container = styled.section`
    background-image: url(${MeditationBg});
    background-position: top left;
    background-size: 100% auto;
    background-repeat: no-repeat;

    @media screen and (max-width: 1919px) {
        background-size: cover;
    }
`

const Wrapper = styled.div`
    max-width: 1682px;
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
    margin: 128px 0 22px;
    max-width: 620px;

    @media screen and (max-width: 767px) {
        font-size: 24px;
        margin: 38px 12px 12px;
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

    @media screen and (max-width: 767px) {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 0;
    }
`

const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 70px 12px 162px;

    @media screen and (max-width: 1919px) {
        width: auto;
        
        img {
            max-width: 20%;
            height: auto;
        }
    }

    @media screen and (max-width: 1023px) {
        flex-direction: column;
        align-items: center;

        img {
            max-width: 50%;
            margin: 50px 0px;
        }
    }
`

const PlateList = styled.div`
    text-align: center;
`

const PlateContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    text-align: right;
    min-width: 597px;
    min-height: 200px;
    background-image: url(${MeditationPlateBg});
    background-size: contain;
    background-repeat: no-repeat;
    padding: 25px 35px;
    border-radius: 15px;
    margin-bottom: 100px;

    &.is-reverse {
        background-image: url(${MeditationPlateReverseBg});
        text-align: left;
        align-items: flex-start;
    }

    :last-child {
        margin-bottom: 0;
    }

    @media screen and (max-width: 1919px) {
        min-height: auto;
        max-width: 350px;
        min-width: 30%;
        background-size: cover;

        ${Text} {
            margin: 0;
        }
    }

    @media screen and (max-width: 1439px) {
        margin-bottom: 50px;

        ${Text} {
            font-size: 18px;
            line-height: 28px;
        }
    }

    @media screen and (max-width: 767px) {
        min-height: 150px;
        padding: 15px 25px;
        
    }

    @media screen and (max-width: 424px) {
        ${Text} {
            font-size: 14px;
            line-height: 26px;
        }
    }
`

const TextWrapper = styled.div`
    max-width: 483px;
`

export { Container, Wrapper, TextWrapper, Text, Title, Row, PlateContainer, PlateList, PlateTitle };
