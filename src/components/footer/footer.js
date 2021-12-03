import React from "react"
import { Link } from "gatsby"
import Logo from '../../images/common/logo.svg'
import Facebook from '../../images/footer/ic_facebook.svg';
import Instagram from '../../images/footer/ic_instagram.svg';
import Twitter from '../../images/footer/ic_twitter.svg';
import { Container, Wrapper, Socials, Menu, MenuItem } from './styles';
import Links from '../../data/links';

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
                <img width="152px" height="124px" src={Logo} alt="logo"/>
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
                            <img width="55px" height="55px" src={link.icon} alt={link.text + " logo"}/>
                        </a>
                    ))}
                </Socials>
            </Wrapper>
        </Container>
    )
}

export default Footer;
