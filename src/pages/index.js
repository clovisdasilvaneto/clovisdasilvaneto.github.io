import React from "react"
import { graphql } from "gatsby"

import Posts from "../components/containers/Posts"
import Layout from "../infra/Layout"
import useSiteMetadata from "../hooks/useSiteMetaData"

export default function Home({ data }) {
  const { title, description } = useSiteMetadata()

  return (
    <Layout title={title} description={description}>
      <Posts data={data} title="Ultimos Posts" />
    </Layout>
  )
}

export const query = graphql`
  query HomeAllPosts {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            date
            title
            description
            author
            path
          }
        }
      }
    }
  }
`
