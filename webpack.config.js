const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin({ filename: 'css.bundle.css' })
const extractSASS = new ExtractTextPlugin({ filename: 'sass.bundle.css' })

const config = {
   module: {
     rules: [
       {
          test: /\.css$/,
          use: extractCSS.extract({ // Instance 1
            fallback: 'style-loader',
            use: [ 'css-loader' ]
          })
       },
       {
          test: /\.scss$/,
          use: extractSASS.extract({ // Instance 2
            fallback: 'style-loader',
            use: [ 'css-loader', 'sass-loader' ]
          })
       }
     ]
   },
   plugins: [
      extractCSS // Instance 1
      extractSASS // Instance 2
   ]
}

export default config