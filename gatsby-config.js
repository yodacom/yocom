module.exports = {
  siteMetadata: {
    title:
      "YodaCom - Apps, Business Automation, Digital Marketing Tech Architecture, Product Launch Consultants",
    author: "Yodacom - Full-Stack App developer",
    imageUrl:
      "https://yodacom.logos.s3.amazonaws.com/y_yodacom_Icon_white150x150.gif",
    description:
      "Web and App Development, Business Automation and Launch consulting ",
    keywords: `Web developer, Web, Developer, App Development, CSS, HTML, JS, Javascript, Gatsby, CSS3, HTML5, Seo, Business Development, Business Automation`,
    // facebook: 'https://facebook.com/webappseed',
    twitter: "https://twitter.com/yodacom",
    github: `https://github.com/yodacom`,
    // medium: 'https://medium.com/@appseed.us',
    linkedin: "https://www.linkedin.com/in/jjblack",
    // bulma: 'https://bulma.io/',
    siteUrl: `https://yodacom.com`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Makefolio",
        short_name: "Makefolio",
        start_url: "/",
        background_color: "#2980b9",
        theme_color: "#2980b9",
        display: "standalone",
        icon: "src/images/gatsby-icon.png",
        orientation: "portrait"
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {}
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-104843706-1",
        // Setting this parameter is optional (required for some countries such as Germany)
        anonymize: true
      }
    },
    `gatsby-plugin-sitemap`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
