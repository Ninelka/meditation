import * as React from "react"
import { Link } from "gatsby"
import Logo from '../images/logo.svg'
import Facebook from '../images/ic_facebook.svg';
import Instagram from '../images/ic_instagram.svg';
import Twitter from '../images/ic_twitter.svg';
import FooterBg from '../images/footer-bg.svg';
import Links from '../data/links'
import styled from "styled-components"

const Container = styled.footer`
    background-image: url(${FooterBg});
    background-position: bottom center;
    background-size: 100% auto;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 105px;
`

const Menu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    margin: 32px 0 0;
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
    }

    a {
        text-decoration: none;
        font-family: "Heebo";
        font-size: 28px;
        line-height: 41px;
        color: var(--text-primary);
        padding: 0 20px;
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

        &:last-child {
            margin-right: 0;
        }
    }
`

const socialLinks = [Facebook, Instagram, Twitter];

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <img width="152px" height="124px" src={Logo} alt="logo"></img>
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
                <Socials>
                    {socialLinks.map(link => (
                        <a href="#">
                            <img width="55px" height="55px" src={link} alt="{link} logo"></img>
                        </a>
                    ))}
                </Socials>
            </Wrapper>
        </Container>
    )
}

export default Footer