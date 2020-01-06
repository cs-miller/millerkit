const path = require('path');

module.exports = {
  presets: [
    {
      name: '@storybook/preset-typescript',
      options: { include: [path.resolve(__dirname, '../src')] }
    }
  ],
  stories: ['../src/**/*.stories.(tsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register'
  ]
};
