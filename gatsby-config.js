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
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },    
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/images`,
        name: "images"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          }
        ]
      }
    },
    'gatsby-plugin-styled-components',
  ],
}
