import styled from 'styled-components'
import TransformBg from '../../images/transform/transform-bg.svg';

const Container = styled.section`
    background-image: url(${TransformBg});
    background-position: center;
    background-size: 100% auto;
    background-repeat: no-repeat;
`

const Wrapper = styled.div`
    max-width: 1520px;
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
    margin: 67px 12px 22px;
    max-width: 578px;

    @media screen and (max-width: 767px) {
        font-size: 24px;
        margin: 38px 12px 12px;
    }
`

const Text = styled.span`
    font-family: "Heebo";
    color: var(--text-secondary);
    font-size: 24px;
    line-height: 130%;
    max-width: 1105px;
    margin: 0 16px 30px;

    p {
        margin-bottom: 7px;
    }

    @media screen and (max-width: 767px) {
        font-size: 14px;

        p {
            margin-bottom: 12px;
        }
    }
`

const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;

    &.is-reverse {
        flex-direction: row-reverse;
        margin: 70px 0 131px;
    }

    @media screen and (max-width: 1919px) {
        svg {
            max-width: 60%;
            height: auto;
        }
    }

    @media screen and (max-width: 424px) {
        flex-wrap: wrap;
        justify-content: center;
        max-width: 100%;
    }
`

const Col = styled.div`
    max-width: 619px;
    text-align: left;

    @media screen and (max-width: 1919px) {
        max-width: 50%;
        margin: 0 32px;
    }

    @media screen and (max-width: 424px) {
        text-align: center;
        max-width: 100%;
        margin: 16px;
    }
`

const ColTitle = styled.h3`
    font-family: "Heebo";
    font-weight: 500;
    color: rgba(0,0,0,0.8);
    font-size: 32px;
    line-height: 47px;
    margin-bottom: 17px;

    @media screen and (max-width: 767px) {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 0;
    }
`

export { Container, Wrapper, Text, Title, Row, Col, ColTitle };
