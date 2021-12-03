import React, { useState } from "react"
import { Link } from "gatsby"
import BurgerBtn from '../burger-btn/burger-btn';
import Logo from '../../images/common/logo.svg'
import Links from '../../data/links'
import { Container, Wrapper, Menu, MenuItem } from './styles';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <Wrapper>
                <img width="148px" height="119px" src={Logo} alt="logo"/>
                <nav>
                    <BurgerBtn open={open} setOpen={setOpen}/>
                    <Menu className={open ? 'is-open' : ''}>
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
