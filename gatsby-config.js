module.exports = {
  siteMetadata: {
    siteUrl: "https://meditationdev.gtsb.io/",
    title: "Meditation",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        allPageHeaders: [
          "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
        ],
      }
    },
    "gatsby-plugin-react-helmet"
  ],
};
