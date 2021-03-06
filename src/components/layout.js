import React from 'react'

import Header from './header/header'
import Footer from './footer/footer';
import StartSection from './start-section/start-section';
import FeatureSection from './feature-section/feature-section';
import Practice from './practice/practice';
import Music from './music/music';
import Meditation from './meditation/meditation';
import Transform from './transform/transform';

import { createGlobalStyle } from "styled-components"
import "@fontsource/heebo/400.css"
import "@fontsource/heebo/500.css"
import "@fontsource/merienda-one/400.css"

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }

    html {
        --color-primary: #1A7F72;
        --text-primary: #000000;
        --text-secondary: rgba(0,0,0, 0.5);
    }

    main {
        background-color: rgba(59, 209, 187, 0.09);
    }
`

const Layout = () => {
    return (
        <main>
            <GlobalStyles />
            <Header/>
            <StartSection/>
            <FeatureSection/>
            <Practice/>
            <Music/>
            <Meditation/>
            <Transform/>
            <Footer/>
        </main>
    )
}

export default Layout
