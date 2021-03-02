import React from "react"
import { Link } from "gatsby"

import { ItemTitle, ItemDescription, ItemLink } from "./styled"

function ListItem({ className, data }) {
  return (
    <article className={className}>
      <header>
        <ItemTitle>{data.title}</ItemTitle>
      </header>

      <ItemDescription>
        <Link to="/">{data.description}</Link>
      </ItemDescription>

      <ItemLink to={data.path}>Ler mais →</ItemLink>
    </article>
  )
}

export default ListItem
