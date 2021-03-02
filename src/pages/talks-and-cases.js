import React from "react"
import styled from "@emotion/styled"
import Layout from "../infra/Layout"
import { Link } from "gatsby"
import useSiteMetadata from "../hooks/useSiteMetaData"

const SoonText = styled.h2`
  text-align: center;
`
const HomeLink = styled(Link)`
  text-align: center;
  display: block;
  color: ${({ theme }) => theme.colors.primary};
`

export default function TalksAndCase() {
  const { title, description } = useSiteMetadata()

  return (
    <Layout title={title} description={description}>
      <SoonText>Em Breve!</SoonText>
      <HomeLink to="/">Voltar a Home</HomeLink>
    </Layout>
  )
}
