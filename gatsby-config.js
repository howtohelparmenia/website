module.exports = {
  siteMetadata: {
    title: `How to Help Armenia`,
    description: `Collection of resources and ideas on how to help Armenia.`,
    author: `@aramboyajyan`,
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
        name: `how-to-help-armenia`,
        short_name: `howtohelparmenia`,
        start_url: `/`,
        background_color: `#D90012`,
        theme_color: `#D90012`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    // `gatsby-plugin-offline`,
  ],
}
