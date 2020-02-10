const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.jsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '~': path.join(__dirname, '../src/'),
      },
    },
  }),
};
