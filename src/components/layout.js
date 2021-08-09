import React from 'react'
import Header from './header'
import StartSection from './start-section';
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
        --text-primary: #000;
        --text-secondary: rgba(#000, 0.5);
    }

    main {
        max-width: 1620px;
        margin: 0 auto;
    }
`

const Layout = () => {
    return (
        <main>
            <GlobalStyles />
            <Header></Header>
            <StartSection></StartSection>
        </main>
    )
}

export default Layout