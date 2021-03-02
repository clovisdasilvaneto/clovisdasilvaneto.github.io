import React from "react"
import Header from "../../../components/Header"

function Short({ children }) {
  return (
    <>
      <Header hasPicture />

      {children}
    </>
  )
}

export default Short
