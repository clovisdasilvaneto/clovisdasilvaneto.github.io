import styled from "@emotion/styled"
import { Link } from "gatsby"

export const ItemTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`
export const ItemDate = styled.p`
  font-size: 0.8rem;
  margin-top: 0;
  color: ${({ theme }) => theme.colors.stone};
`

export const ItemDescription = styled.p`
  font-style: italic;
  margin-top: 1rem;
  display: block;

  a {
    color: ${({ theme }) => theme.colors.dark};
    text-decoration: none;
  }
`

export const ItemLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  display: inline-block;
  text-decoration: none;
`
