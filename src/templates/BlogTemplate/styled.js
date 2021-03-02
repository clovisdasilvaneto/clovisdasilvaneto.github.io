import styled from "@emotion/styled"

export const BlogContent = styled.article`
  margin-top: 4rem;

  span,
  a {
    color: ${({ theme }) => theme.colors.primary};
  }

  img {
    width: 100%;
  }

  p,
  a,
  span,
  ul,
  li {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  blockquote {
    border-left: solid 4px ${({ theme }) => theme.colors.primary};
    margin: 2rem 0;
    padding-left: 3rem;

    p {
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }

  h2,
  h2 span {
    font-size: 2.4rem;
    margin-top: 5rem;
  }

  h3,
  h2 span {
    font-size: 2rem;
    margin-top: 3rem;
  }

  span.error {
    color: ${({ theme }) => theme.colors.error};
  }

  center {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.stone};
    font-weight: 500;
  }
`
