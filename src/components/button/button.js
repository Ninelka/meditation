import React from 'react'
import Btn from "./styles";

const Button = (props) => {
    return (
        <Btn className={props.isBig ? 'size-l' : ''}>
            {props.text}
        </Btn>
    )
}

export default Button;
