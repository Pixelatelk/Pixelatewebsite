const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfiguration = {
  output:"export",
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/media/[name].[hash].[ext]',
        },
      },
    });

    return config;
  },
  images: {
    // Increase the maximum allowed image size (in bytes)
    maxFileSize: 1000000000, // Adjust this value as needed (10MB in this example)
  },
};

module.exports = withPlugins([optimizedImages], nextConfiguration);
