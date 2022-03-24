import PropTypes from "prop-types"

import styled from "@emotion/styled"
import { css } from "@emotion/react"

const VARIANTS_MAPPER = {
  body: ({ theme }) => css`
    font-weight: 400;
    font-size: 1rem;
  `,
  h1: ({ theme }) => css`
    font-size: 2.5rem;
  `,
  h2: ({ theme }) => css`
    font-size: 2rem;
  `,
  h3: () => css`
    font-size: 1.6rem;
    line-height: 2.3rem;
  `,
  h4: () => css`
    font-size: 1rem;
  `,
  h5: () => css`
    font-size: 0.8rem;
  `,
  h6: ({ theme }) => css`
    font-size: 0.6rem;
  `,
  featured: () => css`
    font-weight: 700;
    font-size: 3rem;
  `,
}

const extendDisplay = ({ display }) =>
  display &&
  css`
    display: ${display};
  `

const extendWeight = ({ weight }) =>
  weight &&
  css`
    font-weight: ${weight};
  `

const getVariantStyles = ({ variant, ...props }) =>
  VARIANTS_MAPPER[variant](props)

const Typograph = styled.p`
  text-align: ${({ align }) => align};
  color: ${({ color, theme }) => theme.colors[color]};
  font-family: ${({ theme }) => theme.fonts.roboto};
  margin: ${({ paragraph }) => (paragraph ? `0 0 1rem` : `0`)};

  ${extendDisplay}
  ${getVariantStyles}
  ${extendWeight}
`

Typograph.defaultProps = {
  align: "left",
  variant: "body",
  color: "dark",
  paragraph: false,
}

Typograph.propTypes = {
  align: PropTypes.oneOf(["left", "center", "right"]),
  display: PropTypes.string,
  weight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  variant: PropTypes.oneOf(Object.keys(VARIANTS_MAPPER)),
  color: PropTypes.oneOf(["primary", "error", "light", "dark"]),
  paragraph: PropTypes.bool,
}

export default Typograph
