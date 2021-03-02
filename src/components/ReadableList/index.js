import React from "react"
import { Item } from "./styled"

function ReadableList({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <Item data={item} key={index} />
      ))}
    </div>
  )
}

export default ReadableList
