module.exports = {
  webpack: (config, { dev }) => {
    // Perform customizations to config
    /*config.module = {
      loaders: [
          {
              test: /\.js$|\.jsx$/,
              loader: 'babel-loader',
              query: {
                  presets: ['react-app ', 'react-hmre', 'es2015', 'react', 'stage-0'],
                  plugins: ['transform-decorators-legacy']
              },
          },
          {
              test: /\.css$/,
              loader: 'style!css?module&importLoaders=2&sourceMap&localIdentName=[local]_[hash:base64:5]!postcss-loader'
        }
      ]
  };*/
    // Important: return the modified config
    return config
  }
}
