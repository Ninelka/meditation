import React from 'react'
import styled from "styled-components"

const Btn = styled.button`
    font-size: 24px;
    line-height: 130%;
    padding: 12px 44px;
    border: none;
    color: white;
    background: linear-gradient(180deg, #259385 0%, #159685 100%);
    box-shadow: 0px 13px 28px rgba(26, 127, 114, 0.2);
    border-radius: 30px;
    cursor: pointer;

    &.size-l {
        font-size: 30px;
        font-weight: bold;
        padding: 18px 89px;
    }
`

const Button = (props) => {
    return (
        <Btn className={props.isBig ? 'size-l' : ''}>
            {props.text}
        </Btn>
    )
}

export default Button;