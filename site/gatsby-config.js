module.exports = {
  siteMetadata: {
    description: "Personal page of Sandeep Potturi",
    locale: "en",
    title: "Sandeep Potturi",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "classic",
      },
    },
  ],
}
