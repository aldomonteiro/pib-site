module.exports = {
  siteMetadata: {
    title: `Pizzaibot`,
    description: `Cardápio e pedidos de pizza integrados ao Whatsapp`,
    author: `Pizzaibot`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "BACKEND",
        // This is field under which it's accessible
        fieldName: "backend",
        // Url to query from
        url: "http://localhost:4001/",

        // refetch interval in seconds
        refetchInterval: 60,
      },
    },
    // 'gatsby-plugin-webpack-bundle-analyzer',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
