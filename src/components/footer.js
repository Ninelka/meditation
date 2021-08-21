import React from "react"
import { Link } from "gatsby"
import Logo from '../images/common/logo.svg'
import Facebook from '../images/footer/ic_facebook.svg';
import Instagram from '../images/footer/ic_instagram.svg';
import Twitter from '../images/footer/ic_twitter.svg';
import FooterBg from '../images/footer/footer-bg.svg';
import Links from '../data/links'
import styled from "styled-components"

const Container = styled.footer`
    background-image: url(${FooterBg});
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: 100% auto;
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
`

const socialLinks = [
    {
        url: 'https://facebook.com',
        text: 'Facebook',
        icon: Facebook
    },
    {
        url: 'https://instagram.com',
        text: 'Instagram',
        icon: Instagram
    },
    {
        url: 'https://twitter.com',
        text: 'Twitter',
        icon: Twitter
    }];

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
                        <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.url}>
                            <img width="55px" height="55px" src={link.icon} alt={link.text + " logo"}></img>
                        </a>
                    ))}
                </Socials>
            </Wrapper>
        </Container>
    )
}

export default Footer