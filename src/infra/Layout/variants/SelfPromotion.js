import React from "react"
import AboutBanner from "../../../components/AboutBanner"
import Header from "../../../components/Header"

function SelfPromotion({ children }) {
  return (
    <>
      <Header>
        <AboutBanner></AboutBanner>
      </Header>

      {children}
    </>
  )
}

export default SelfPromotion
