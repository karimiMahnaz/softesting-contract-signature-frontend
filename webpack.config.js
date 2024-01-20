//const webpack = require('webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
		new NodePolyfillPlugin()
	],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      //  use: ['babel-loader'],
      use: {
        loader: 'babel-loader',
        options: {
          plugins: [
            ['@babel/plugin-transform-react-jsx', { throwIfNamespace: false }]
          ]
        }
      }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              throwIfNamespace: false,
            },
          },
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
            
         },
       ],
      },
    ], 
  
   resolve: {
   //   fallback: { 'path': require.resolve('path-browserify') },
   //  fallback: { 'os': require.resolve('os-browserify/browser') },
        extensions: ['.jsx', '.js', '.tsx', '.ts'],
   
     fallback: {
       "fs": false,
       "tls": false,
       "net": false,
       "path": false,
       "os":false,
       "zlib": false,
       "http": false,
       "https": false,
       "stream": false,
       "crypto": false,
       "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
   },
  },
},

  devServer: {
    contentBase: __dirname + "/public/",
    inline: true,
    host: '0.0.0.0',
    port: 3000,  },
    output: {
      path: __dirname + "/public/assets/",
      publicPath: "/assets/",
      filename: "bundle.js",
      chunkFilename: '[name].js'
  },
};




////------------------------------------------------







//   "*": "http://localhost:8000"
//"*": "https://api.softestingca.com"
// const path = require('path');
// const webpack = require('webpack');

// module.exports={
//   entry:path.resolve(__dirname,'src','index.js'),
//   output:{
//       path:path.resolve(__dirname,'dist'),
//       filename:'bundle.js'
//   },
//   resolve:{
//       extensions:['.js','.js']
//   },



// module:{
//     entry:'./src/index.js',
//     module:{
//         rules:[
//             {
//                 test: /\.(png|jp(e*)g|svg|gif)/,
//                 use:[
//                     {
//                         loader:'file-loader',
//                         options:{
//                             name:'images/[hash]-[name].[ext]',
//                         }
//                     },
//                 ]
//             }
//         ]
//     }
// }
// }