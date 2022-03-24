import React from "react"
import styled from "@emotion/styled"
import Layout from "../infra/Layout"
import useSiteMetadata from "../hooks/useSiteMetaData"
import Typograph from "../components/ui/Typograph"

const Box = styled(Typograph)`
  border: solid 1px #cdcdcd;
  padding: 1rem;
  font-size: 1.3rem;
  cursor: pointer;
  background: #000;
  color: #fff;
`

const MentorFrame = styled.iframe`
  width: 100%;
  border: none;
  overflow: hidden;
  transition: ease-out 0.3s height;
`

const options = {
  iniciante: "iniciante",
  jr: "jr",
}

export default function Mentorship() {
  const { title, description } = useSiteMetadata()
  const [selectedOption, setSelectedOption] = React.useState()

  const handleOptionClick = option => () => setSelectedOption(option)

  return (
    <Layout title={`Mentoria - ${title}`} description={description}>
      <Typograph variant="h2" weight={600} paragraph>
        Mentoria Frontend
      </Typograph>

      <Typograph variant="h3" paragraph>
        Se você está aqui, isto significa que no minimo você está curioso sobre
        a area de desenvolvimento web, e só por isto eu já fico muito feliz,
        pois o primeiro passo já foi dado!
      </Typograph>

      <br />

      <Typograph variant="h2" weight={600} paragraph>
        Como Funciona?
      </Typograph>

      <Typograph variant="h3" paragraph>
        A mentoria consistirá de 3 fases semanais:
      </Typograph>

      <ul>
        <Typograph as="li" variant="h3">
          Estudar os tópicos da semana (sozinho)
        </Typograph>
        <Typograph as="li" variant="h3">
          Tirar dúvidas (junto com o mentor e a turma)
        </Typograph>
        <Typograph as="li" variant="h3">
          Enviar projetos o mentor, se possível utilizando github
        </Typograph>
      </ul>

      <br />

      <Typograph variant="h3" paragraph>
        Cada sessão <b>Tira Dúvidas</b> acontecerão via ZOOM, portanto
        certifique-se de ter a aplicação instalada, e favor{" "}
        <b>manter o microfone mutado</b> na video chamada e apenas desmultar
        quando você for falar, para que não atrapalhe a sessão.
      </Typograph>

      <Typograph variant="h3" paragraph>
        As sessões ocorrerão aos sábados sendo 45 minutos para mentoria
        iniciantes e 45 minutos para mentoria júniors.
      </Typograph>

      <br />
      <br />
      <Typograph variant="h1" paragraph>
        <i>
          Não espere aulas na mentoria, o intuito da mentoria é lhe dar um
          norte, mas o conhecimento especializado dependerá unica e
          exclusivamente de você!
        </i>
      </Typograph>
      <br />
      <br />

      <Typograph variant="h3" paragraph>
        Antes de realizar a sua inscrição na mentoria, certifiquesse de olhar a
        grade curricular dos dois levels e veja qual delas você melhor se
        encaixa.
      </Typograph>

      <br />
      <Typograph variant="h3" paragraph>
        Primeiro selecione a descrição que melhor se encaixa com o seu perfil:
      </Typograph>

      <Box onClick={handleOptionClick(options.iniciante)}>
        Sou iniciante (Não sei o que é html ou conheço apenas o basico de HTML e
        CSS) - das <u>15:00 - 15:45</u>
      </Box>

      <MentorFrame
        src="https://docs.google.com/forms/d/e/1FAIpQLSfg_CLD4SOnDM8QLEJgpFv1jfkAq3O-DMD--DVNj8kV1yj0DA/viewform?embedded=true"
        height={selectedOption === options.iniciante ? 930 : 0}
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Carregando…
      </MentorFrame>

      <Box paragraph onClick={handleOptionClick(options.jr)}>
        Sou Júnior (Conheço bem HTML, CSS e JS, mas não sei o que é React) - das
        <u>16:00 - 16:45</u>
      </Box>

      <MentorFrame
        src="https://docs.google.com/forms/d/e/1FAIpQLSeO9rPvuKBwG4wYxTT8Gal7iVkUNOVrXT88QjfPu3Q07PyYTA/viewform?embedded=true"
        height={selectedOption === options.jr ? 930 : 0}
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Carregando…
      </MentorFrame>
    </Layout>
  )
}
