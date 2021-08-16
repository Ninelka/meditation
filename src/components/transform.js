import React from 'react'
import styled from 'styled-components'

import TransformBg from '../images/transform/transform-bg.svg';
import TransformImageLeft from '../images/transform/transform-image-left.svg';
import TransformImageRight from '../images/transform/transform-image-right.svg';
import Button from './button';

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
    margin: 67px 0 22px;
    max-width: 578px;
`

const Text = styled.p`
    font-family: "Heebo";
    color: var(--text-secondary);
    font-size: 24px;
    line-height: 130%;
    max-width: 1105px;
    margin-bottom: 30px;

    p {
        margin-bottom: 7px;
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
`

const Col = styled.div`
    max-width: 619px;
    text-align: left;
`

const ColTitle = styled.h3`
    font-family: "Heebo";
    font-weight: 500;
    color: rgba(0,0,0,0.8);
    font-size: 32px;
    line-height: 47px;
    margin-bottom: 17px;
`

const Transform = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Transform Your Body, Mind and Life Today</Title>
                <Text>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos  sint occaecati cupiditate non provident.”</Text>
                <Row>
                    <img width="704px" height="554px" src={TransformImageLeft} alt="twisted woman"></img>
                    <Col>
                        <ColTitle>Antistrees Meditation</ColTitle>
                        <Text>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected.</p>
                            <p>These cases are perfectly simple and easy to distinguish. In a free hour when our power of choice is untrammelled.</p>
                        </Text>
                        <Button text="Learn More"></Button>
                    </Col>
                </Row>
                <Row className="is-reverse">
                    <img width="766px" height="533px" src={TransformImageRight} alt="fitness woman"></img>
                    <Col>
                        <ColTitle>Backyark Band Meditation</ColTitle>
                        <Text>
                            <p>To take a trivial example, which of us ever undertakes laborious physical exercise except to obtain some advantage from it...</p>
                            <p>The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        </Text>
                        <Button text="Learn More"></Button>
                    </Col>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default Transform