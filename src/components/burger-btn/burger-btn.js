import React, { useState, useRef, useEffect } from 'react';
import { gsap } from "gsap";
import BurgerBtnStyle from './styles';

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

    }, [props.open, query]);

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
                />
                <span
                    onKeyDown={() => close()}
                    onClick={() => close()}
                    role="button"
                    tabIndex="0"
                    aria-label="Burger button second line"
                    className=' burger-btn__line burger-btn__line--middle'
                />
                <span
                    onKeyDown={() => close()}
                    onClick={() => close()}
                    role="button"
                    tabIndex="0"
                    aria-label="Burger button third line"
                    className='burger-btn__line burger-btn__line--bottom'
                />
            </span>
        </BurgerBtnStyle>
    )
}

export default BurgerBtn
