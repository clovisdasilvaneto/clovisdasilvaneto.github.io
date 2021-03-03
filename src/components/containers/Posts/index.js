import React from "react"
import ReadableList from "../../ReadableList"

import { PostsTitle } from "./styled"

const formatPostStructure = post => ({
  title: post?.node?.frontmatter?.title,
  description: post?.node?.frontmatter?.description,
  path: post?.node?.frontmatter?.path,
  date: post?.node?.frontmatter?.date,
})

function Posts({ data, title }) {
  return (
    <section>
      <header>
        <PostsTitle as="h2" variant="h2">
          {title}
        </PostsTitle>
      </header>

      <ReadableList
        items={data.allMarkdownRemark.edges.map(formatPostStructure)}
      />
    </section>
  )
}

export default Posts
