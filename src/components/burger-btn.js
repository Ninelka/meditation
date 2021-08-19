import React, { useState } from 'react';
import { gsap } from "gsap";
import styled from 'styled-components'

const BurgerBtnStyle = styled.span`
    .burger-btn {
        display: flex;
        flex-direction: column;
        width: 4em;
        height: 4em;
        padding: 1em;
        justify-content: space-evenly;
        cursor: pointer;

        @media (min-width: 1024px) {
            display: none;
        }
    }

    .burger-btn__line {
        margin: auto;
        background: linear-gradient(180deg, #259385 0%, #159685 100%);
        background-size: 200% 200%;
        width: 4em;
        height: 0.5em;
        border-radius: 10px;
        
        &--top {
            width: 50%;
            margin-right: 50%; 
        }
        
        &--middle {
            z-index: 2;
        }
        
        &--bottom {
            width: 50%;
            margin-left: 50%;
        }
    }
`

const BurgerBtn = (props) => {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    if (props.open) {
        gsap.from('.burger-btn__line--top', {
            duration: .75,
            x: 0,
            ease: 'bounce'
        })
        gsap.to('.burger-btn__line--top', {
            duration: .75,
            y: 9,
            x: 6,
            rotate: 50
        })

        gsap.to('.burger-btn__line--middle', {
            duration: 1,
            rotate: -50,
            ease: 'bounce'
        })

        gsap.from('.burger-btn__line--bottom', {
            duration: .75,
            x: 0,
            ease: 'bounce'
        })
        gsap.to('.burger-btn__line--bottom', {
            duration: .75,
            y: -9,
            x: -6,
            rotate: 50
        })
    } else {
        gsap.to('.burger-btn__line--top', {
            duration: .75,
            y: 0,
            x: 0,
            rotate: 0
        })
        gsap.to('.burger-btn__line--middle', {
            duration: 1,
            rotate: 0,
            ease: 'bounce'
        })
        gsap.to('.burger-btn__line--bottom', {
            duration: .75,
            y: 0,
            x: 0,
            rotate: 0
        })
    };

    return (
        <BurgerBtnStyle>
            <span className='burger-btn' open={props.open} onClick={() => props.setOpen(!props.open)}>
                <span onClick={() => close()} className='burger-btn__line burger-btn__line--top'></span>
                <span onClick={() => close()} className=' burger-btn__line burger-btn__line--middle'></span>
                <span onClick={() => close()} className='burger-btn__line burger-btn__line--bottom'></span>
            </span>
        </BurgerBtnStyle>
    )
}

export default BurgerBtn