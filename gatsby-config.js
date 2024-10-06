/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `imidy`,
    siteUrl: `https://www.imidycrochet.com`
  },
  plugins: ["gatsby-plugin-netlify-cms", "gatsby-plugin-postcss", "gatsby-plugin-image", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/logo.jpeg"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};