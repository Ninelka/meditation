import React from 'react'

import TransformImageLeft from '../../images/transform/transform-image-left.svg';
import TransformImageRight from '../../images/transform/transform-image-right.svg';
import Button from '../button/button';

import { ReactSVG } from 'react-svg'
import { Container, Wrapper, Text, Title, Row, Col, ColTitle } from './styles';

const Transform = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Transform Your Body, Mind and Life Today</Title>
                <Text>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos  sint occaecati cupiditate non provident.”</Text>
                <Row>
                    <ReactSVG src={TransformImageLeft} />
                    <Col>
                        <ColTitle>Antistrees Meditation</ColTitle>
                        <Text>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected.</p>
                            <p>These cases are perfectly simple and easy to distinguish. In a free hour when our power of choice is untrammelled.</p>
                        </Text>
                        <Button text="Learn More"/>
                    </Col>
                </Row>
                <Row className="is-reverse">
                    <ReactSVG src={TransformImageRight} />
                    <Col>
                        <ColTitle>Backyark Band Meditation</ColTitle>
                        <Text>
                            <p>To take a trivial example, which of us ever undertakes laborious physical exercise except to obtain some advantage from it...</p>
                            <p>The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        </Text>
                        <Button text="Learn More"/>
                    </Col>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default Transform
