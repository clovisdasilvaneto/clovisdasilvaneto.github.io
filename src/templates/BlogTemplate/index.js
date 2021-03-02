import React from "react"
import { graphql } from "gatsby"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

import Layout from "../../infra/Layout"
import { SHORT } from "../../infra/Layout/variants"
import Typograph from "../../components/ui/Typograph"

import { BlogContent } from "./styled"

export default function BlogTemplate({ data }) {
  const post = data.markdownRemark
  const { title, description, id, path } = post.frontmatter
  const disqusConfig = {
    url: `http://clovisdasilvaneto.github.io${path}`,
    identifier: id,
    title,
  }

  return (
    <Layout title={title} description={description} variant={SHORT}>
      <section>
        <header>
          <Typograph variant="featured">{title}</Typograph>
        </header>

        <BlogContent dangerouslySetInnerHTML={{ __html: post.html }} />

        <CommentCount config={disqusConfig} placeholder={"..."} />

        <Disqus config={disqusConfig} />
      </section>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        path
      }
      html
    }
  }
`
