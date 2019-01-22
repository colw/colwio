module.exports = {
  siteMetadata: {},
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'colw.io',
        start_url: '/',
        background_color: '#1EAEDB',
        theme_color: '#1EAEDB',
        display: 'minimal-ui',
        icon: 'src/images/colw-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/content',
        name: 'markdown-pages',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/',
      },
    },
    'gatsby-transformer-yaml',
  ],
}
