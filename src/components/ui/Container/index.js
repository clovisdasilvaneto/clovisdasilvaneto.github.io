import styled from "@emotion/styled"

const Container = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    max-width: ${({ theme }) => theme.container}px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`

export default Container
