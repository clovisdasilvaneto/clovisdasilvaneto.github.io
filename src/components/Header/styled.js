import styled from "@emotion/styled"
import Container from "../ui/Container"

export const HeaderWrapper = styled.div`
  padding: 2rem;
  background: linear-gradient(
        213deg,
        rgb(94, 49, 220) 0%,
        rgb(67, 53, 223) 100%
      )
      right center / contain no-repeat,
    linear-gradient(
        32deg,
        rgba(255, 255, 255, 0.25) 33%,
        rgba(153, 153, 153, 0.25) 100%
      )
      left center rgb(49, 85, 220);

  background-position: right center, left center;
  background-repeat: no-repeat;
`

export const HeaderLogo = styled.h1`
  margin: 0;
  font-size: 1.3rem;
  display: flex;
  align-items: center;

  a {
    font-size: 1.3rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.light};
    font-weight: 400;
  }

  img {
    width: 50px;
    border-radius: 100%;
    margin-right: 1rem;
  }
`

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
