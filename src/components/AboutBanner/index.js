import React from "react"

import { AboutContainer, AboutText, AboutImage } from "./styled"

function AboutBanner() {
  return (
    <AboutContainer>
      <AboutText>
        Olá! Meu nome é Clóvis Neto. Neste espaço eu posto meus pensamentos,
        idéias e coisas do dia-a-dia
      </AboutText>
      <AboutImage src={"/images/clovis-neto.jpg"} />
    </AboutContainer>
  )
}

export default AboutBanner
