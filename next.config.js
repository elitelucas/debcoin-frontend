const path = require('path')
const withPlugins = require("next-compose-plugins");
const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
module.exports = withPlugins([[withSass], [withImages], [withCss]], {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
            loader: 'url-loader',
            options: {
                limit: 100000,
                name: '[name].[ext]'
            }
        }
    })
    }
    return config
  },
  cssLoaderOptions: {
    url: false
  },
  env: {
    APP_URL:"https://64.227.30.137:443",
    CAPTCHA_SITE_KEY:"6LcGYNEZAAAAAJcbNy-gij3qs1zGNo-ajvNOiR0t",
    SITE_NAME:"https://64.227.30.137:443"
  }
  
});



