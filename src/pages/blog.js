import React from "react"
import { graphql } from "gatsby"

import Posts from "../components/containers/Posts"
import Layout from "../infra/Layout"
import { SHORT } from "../infra/Layout/variants"
import useSiteMetadata from "../hooks/useSiteMetaData"

export default function Blog({ data }) {
  const { title, description } = useSiteMetadata()

  return (
    <Layout title={title} description={description} variant={SHORT}>
      <Posts data={data} title="Blog" />
    </Layout>
  )
}

export const query = graphql`
  query BlogAllPosts {
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
