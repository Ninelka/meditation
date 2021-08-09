import * as React from "react"
import { Link } from "gatsby"
import Logo from '../images/logo.svg';
import styled from "styled-components"

const Wrapper = styled.header`
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
    min-width: 66px;

    &:last-child {
        margin-right: 0;
    }

    ::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -32px;
        height: 10px;
        background-color: var(--color-primary);
        border-radius: 10px 10px 0px 0px;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
        transition-delay: 0.2s;
    }

    a {
        text-decoration: none;
        font-family: "Heebo";
        color: var(--text-primary);
    }

    &:hover {
        ::after {
            opacity: 1;
        }
        
        a {
            color: var(--color-primary);
            font-weight: 500;
        }
    }
`

// data
const links = [
    {
        text: "Home",
        url: "/",
    },
    {
        text: "Explore",
        url: "/explore",
    },
    {
        text: "Classes",
        url: "/classes",
    },
    {
        text: "About Us",
        url: "/about-us",
    },
    {
        text: "Privacy",
        url: "/privacy",
    },
    {
        text: "Services",
        url: "/services",
    },
]

const Header = () => {
    return (
        <Wrapper>
            <img width="148px" height="119px" src={Logo} alt="logo"></img>
            <nav>
                <Menu>
                    {links.map(link => (
                        <MenuItem>
                            <Link key={link.url} to={link.url}>
                                {link.text}
                            </Link>
                        </MenuItem>
                    ))}
                </Menu>
            </nav>
        </Wrapper>
    )
}

export default Header