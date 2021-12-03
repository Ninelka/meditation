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
        
        @media screen and (max-width: 767px) {
            padding: 0;
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

export default BurgerBtnStyle;
