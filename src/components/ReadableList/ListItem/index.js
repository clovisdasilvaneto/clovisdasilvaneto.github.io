import React from "react"
import { Link } from "gatsby"

import { ItemTitle, ItemDescription, ItemLink, ItemDate } from "./styled"
import { format } from "date-fns"
import { pt } from "date-fns/locale"

function ListItem({ className, data }) {
  const date = format(new Date(data.date), "MMMM dd, yyyy", { locale: pt })

  return (
    <article className={className}>
      <header>
        <ItemTitle>{data.title}</ItemTitle>
        <ItemDate>{date}</ItemDate>
      </header>

      <ItemDescription>
        <Link to="/">{data.description}</Link>
      </ItemDescription>

      <ItemLink to={data.path}>Ler mais →</ItemLink>
    </article>
  )
}

export default ListItem
