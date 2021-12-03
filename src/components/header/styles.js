import styled from "styled-components"

const Container = styled.header`
    background-color: white;
`

const Wrapper = styled.div`
    max-width: 1620px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 16px;
    position: relative;

    @media screen and (min-width: 1920px) {
        padding: 6px 0;
    }
    
    @media screen and (max-width: 1023px) {
        padding: 6px 16px;
    }
    
    img {
        @media screen and (max-width: 767px) {
            width: 80px;
            height: auto;
        }
    }
`

const Menu = styled.ul`
    display: flex;
    text-align: center;
    list-style: none;

    @media screen and (max-width: 1023px) {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        transition: height 0.7s ease-in-out;
        background-color: #3bd1bb;
        height: 0;
        overflow: hidden;
        flex-direction: column;
        justify-content: center;

        &.is-open {
            height: calc(100vh - 131px);
            
            @media screen and (max-width: 767px) {
                height: calc(100vh - 76px);
            }
        }
    }
`

const MenuItem = styled.li`
    position: relative;
    padding: 0 15px;
    margin: 0 60px 0 0;

    &:last-child {
        margin: 0;
    }

    ::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -42px;
        height: 10px;
        background-color: var(--color-primary);
        border-radius: 10px 10px 0px 0px;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }

    a {
        text-decoration: none;
        font-family: "Heebo";
        font-weight: 500;
        font-size: 32px;
        line-height: 47px;
        color: var(--text-primary);
    }

    &:hover {
        ::after {
            opacity: 1;
        }
        
        a {
            color: var(--color-primary);
        }
    }

    @media screen and (max-width: 1293px) {
        margin: 0 30px 0 0;

        a {
            font-size: 22px;
        }
    }

    @media screen and (max-width: 1023px) {
        padding: 20px 15px;
        margin: 0;

        ::after {
            display: none;
        }

        a {
            display: block;
            font-size: 26px;
        }
    }
    
    @media screen and (max-width: 767px) {
        padding: 16px 15px;
    }

`

export { Container, Wrapper, Menu, MenuItem };
