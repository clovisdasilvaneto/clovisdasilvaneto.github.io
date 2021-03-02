import styled from "@emotion/styled"

export const NavigationWrapper = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;

  display: none;

  ${({ theme }) => theme.media.desktop`
    display: flex;
  `}
`

export const NavigationItem = styled.li`
  list-style: none;
  margin: 0 ${({ straight }) => (straight ? 0.4 : 1)}rem;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  a {
    margin: 0;
    color: ${({ theme }) => theme.colors.light};
    text-decoration: none;
    font-weight: 400;
  }
`
