// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { i18n } = require('./next-i18next.config');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextTranslate = require('next-translate');

module.exports = nextTranslate({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.module.rules.push({
      test: /\.ts?$/,
      loader: 'stylelint-custom-processor-loader',
      exclude: /node_modules/,
    });
    return config;
  },
});
