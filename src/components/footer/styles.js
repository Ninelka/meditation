import styled from "styled-components";
import FooterBg from '../../images/footer/footer-bg.svg';

const Container = styled.footer`
    background-image: url(${FooterBg});
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: cover;

    @media screen and (min-width: 1920px) {
        background-size: 100% auto;
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 105px;

    @media (max-width: 1919px) {
        padding-top: 1%;
    }
`

const Menu = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
    margin: 32px 0 0;

    @media (max-width: 1023px) {
        justify-content: center;
    }
`

const MenuItem = styled.li`
    position: relative;

    &:last-child {
        ::after {
            display: none;
        }
    }

    ::after {
        content: '';
        position: absolute;
        top: 50%;
        right: -2px;
        transform: translateY(-50%);
        width: 2px;
        height: 30px;
        background-color: var(--text-primary);

        @media (max-width: 816px) {
            display: none;
        }
    }

    a {
        text-decoration: none;
        font-family: "Heebo";
        font-size: 28px;
        line-height: 41px;
        color: var(--text-primary);
        padding: 0 20px;
        
        @media screen and (max-width: 767px) {
            font-size: 24px;
        }
    }

    &:hover {
        a {
            color: var(--color-primary);
        }
    } 
`

const Socials = styled.div`
    display: flex;
    margin: 30px 0;

    a {
        margin-right: 30px;

        :hover {
            img {
                box-shadow: 0px 10px 10px rgba(26, 127, 114, 0.65);
                border-radius: 50%;
            }
        }

        &:last-child {
            margin-right: 0;
        }
    }
    
    img {
        @media screen and (max-width: 767px) {
            width: 45px;
            height: 45px;
        }
    }
`

export { Container, Wrapper, Socials, Menu, MenuItem };
