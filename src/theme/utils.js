import { css } from "@emotion/react"

const breakpoints = {
  desktop: 1025,
}

const generateBreakpoint = (width, cssMarkup) => css`
  @media (min-width: ${width}px) {
    ${cssMarkup};
  }
`

export default {
  breakpoints,
  container: 960,
  media: Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => generateBreakpoint(breakpoints[label], args)
    return acc
  }, {}),
}
