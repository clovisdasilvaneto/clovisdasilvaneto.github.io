import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import { Global, ThemeProvider } from "@emotion/react"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

import VARIANTS_MAPPER, { SELF_PROMOTION } from "./variants"

import globals from "../../theme/globals"
import theme from "../../theme"
import { LayoutContainer } from "./styled"

deckDeckGoHighlightElement()

export default function Layout({
  children,
  title,
  description,
  variant = SELF_PROMOTION,
}) {
  const Variant = VARIANTS_MAPPER[variant] || Fragment

  return (
    <>
      <Helmet>
        <html lang="pt-br" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <ThemeProvider theme={theme}>
        <Variant>
          <Global styles={globals} />

          <LayoutContainer>{children}</LayoutContainer>
        </Variant>
      </ThemeProvider>
    </>
  )
}
