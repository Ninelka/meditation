import React, { useState, useRef, useEffect } from 'react';
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
    let targetElement = useRef();
    let query = gsap.utils.selector(targetElement);

    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    useEffect(() => {

        if (props.open) {
            gsap.from(query('.burger-btn__line--top'), {
                duration: .75,
                x: 0,
                ease: 'bounce'
            })
            gsap.to(query('.burger-btn__line--top'), {
                duration: .75,
                y: 9,
                x: 6,
                rotate: 50
            })

            gsap.to(query('.burger-btn__line--middle'), {
                duration: 1,
                rotate: -50,
                ease: 'bounce'
            })

            gsap.from(query('.burger-btn__line--bottom'), {
                duration: .75,
                x: 0,
                ease: 'bounce'
            })
            gsap.to(query('.burger-btn__line--bottom'), {
                duration: .75,
                y: -9,
                x: -6,
                rotate: 50
            })
        } else {
            gsap.to(query('.burger-btn__line--top'), {
                duration: .75,
                y: 0,
                x: 0,
                rotate: 0
            })
            gsap.to(query('.burger-btn__line--middle'), {
                duration: 1,
                rotate: 0,
                ease: 'bounce'
            })
            gsap.to(query('.burger-btn__line--bottom'), {
                duration: .75,
                y: 0,
                x: 0,
                rotate: 0
            })
        };

    }, [props.open]);

    return (
        <BurgerBtnStyle>
            <span
                ref={targetElement}
                className='burger-btn'
                onKeyDown={() => props.setOpen(!props.open)}
                open={props.open}
                onClick={() => props.setOpen(!props.open)}
                role="button"
                tabIndex="0"
                aria-label="Burger button">

                <span
                    onKeyDown={() => close()}
                    onClick={() => close()}
                    role="button"
                    tabIndex="0"
                    aria-label="Burger button first line"
                    className='burger-btn__line burger-btn__line--top'
                ></span>
                <span
                    onKeyDown={() => close()}
                    onClick={() => close()}
                    role="button"
                    tabIndex="0"
                    aria-label="Burger button second line"
                    className=' burger-btn__line burger-btn__line--middle'
                ></span>
                <span
                    onKeyDown={() => close()}
                    onClick={() => close()}
                    role="button"
                    tabIndex="0"
                    aria-label="Burger button third line"
                    className='burger-btn__line burger-btn__line--bottom'
                ></span>
            </span>
        </BurgerBtnStyle>
    )
}

export default BurgerBtn