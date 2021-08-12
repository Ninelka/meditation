import * as React from "react"
import { Link } from "gatsby"
import Logo from '../images/logo.svg'
import Links from '../data/links'
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
    padding: 6px 0;
    
`

const Menu = styled.ul`
    display: flex;
    text-align: center;
    list-style: none;
`

const MenuItem = styled.li`
    position: relative;
    padding: 0 15px;
    margin-right: 60px;

    &:last-child {
        margin-right: 0;
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
`
const Header = () => {
    return (
        <Container>
            <Wrapper>
                <img width="148px" height="119px" src={Logo} alt="logo"></img>
                <nav>
                    <Menu>
                        {Links.map(link => (
                            <MenuItem key={link.url}>
                                <Link to={link.url}>
                                    {link.text}
                                </Link>
                            </MenuItem>
                        ))}
                    </Menu>
                </nav>
            </Wrapper>
        </Container>
    )
}

export default Header