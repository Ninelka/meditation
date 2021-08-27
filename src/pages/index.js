import * as React from "react"
import { Helmet } from "react-helmet";

import Layout from '../components/layout'

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>Meditation</title>
        <meta name="description" content="This page is educational for learning Gatsby, Styled components, GSAP animation and more" />
      </Helmet>
      <Layout></Layout>
    </>
  )
}

export default IndexPage
