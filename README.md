# Full Stack Gatsby Bulma Starter

> A Quick Way to bootstrap your next Gatsby + Bulma site. Inspired by [this](https://github.com/amandeepmittal/gatsby-bulma-quickstart) starter

![ss](https://static.appseed.us/misc/thumb-gatsby-bulma.png)

## Demo 💯

- [Demo Link](https://fullstack-gatsbyjs.appseed.us/)

## Features 🚀

- Gatsby v2
- Bulma CSS
- Responsive design
- Google Analytics
- SEO
- Netlify Deployment 
- Classic deployment (FTP upload)

## Languages and Frameworks ⚛️

- Gatsby
- Bulma
- SASS
- GraphQL

## How to use it? 👨‍💻

You need npm and Gatsby CLI installed on your development machine.

### Clone the repository/Installation

If you have Git installed on your system you can run the following command:

`git clone https://github.com/rosoftdeveloper/fullstack-gatsbyjs.git`

Otherwise you can directly download it clicking on download button on this repository.

### Running in development mode

Go inside `fullstack-gatsbyjs/` directory and run the following command:

- `npm install` to install modules
- `gatsby develop` to start the development (live browser update)
- `gatsby build` generate the deplyment in `public` directory
- `npm run deploy` deploy your app via FTP `EDIT deploy.js (config section)`

### Open the source code and start editing!

The site is now running at
[http://localhost:8000](http://localhost:8000).

Open `fullstack-gatsbyjs/` directory in your code editor of choice and edit it. 
Save your changes and the changes will be reflected in the browser without manual refresh!

### Add your own Google Analytics Id

Once you have google-analytics tracking id for your site, you can configure in `gatsby-config.js` file:

```js
resolve: `gatsby-plugin-google-analytics`,
  options: {
    // Your Tracking Id 👇
    trackingId: 'UA-XXXXXXXX-X',
    anonymize: true
    }
  }
```

### Configure FTP deployment 

Edit `deploy.js` file:

```js
var config = {
    user: "YOUR_USER_HERE",                   // NOTE that this was username in 1.x 
    password: "YOUR_PASS_HERE",           // optional, prompted if none given
    host: "YOUR_FTP_SERVER_HERE",
    port: 21,
    localRoot: __dirname + '/public',
    remoteRoot: '/',
    include: ['*', '**/*'],      // this would upload everything except dot files
    //include: ['*.php', 'dist/*'],
    exclude: ['dist/**/*.map'],     // e.g. exclude sourcemaps - ** exclude: [] if nothing to exclude **
    deleteRemote: false,              // delete ALL existing files at destination before uploading, if true
    forcePasv: false                 // Passive mode is forced (EPSV command is not sent)
}
```

## Support
Open a new issuehere. Live support on [Discord](https://discord.gg/fZC6hup) and [Facebook](https://www.facebook.com/groups/fullstack.apps.generator). 

---
Made with ♥ by [AppSeed.us]("https://appseed.us")
