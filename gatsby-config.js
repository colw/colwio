module.exports = {
  siteMetadata: {
    title: 'colw.io',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
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
  ],
}
