/* eslint-disable */
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logos from "../components/logos"
import Try from "../components/try"
import Circle from "../components/leftovers/circle"
import AntDesign from "../Home"

class IndexPage extends React.Component {
  render() {
    console.log("props", this.props)
    return (
      <Layout>
        <SEO title="SiliSky" />
        {/* <Circle />
        <Logos />
        <Try /> */}
        <AntDesign />
      </Layout>
    )
  }
}
/* eslint-enable */

export const query = graphql`
  query {
    silisky {
      users {
        email
      }
    }
  }
`

export default IndexPage
