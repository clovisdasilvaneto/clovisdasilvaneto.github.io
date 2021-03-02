const path = require("path")

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const blogTemplate = path.resolve("src/templates/BlogTemplate/index.js")

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogTemplate,
      })
    })
  })
}
