module.exports = {
  siteMetadata: {
    title: `James McEwan`,
    description: `James McEwan is a developer from Scotland.`,
    author: `@mce`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`overpass mono\:400`],
        display: "swap",
      },
    },
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
        name: `James McEwan`,
        short_name: `mcwn`,
        start_url: `/`,
        background_color: `#cab3f7`,
        theme_color: `#cab3f7`,
        display: `minimal-ui`,
        icon: `src/images/mcwn-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
};
