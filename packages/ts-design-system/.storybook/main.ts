import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)', '../src/**/*.mdx'],
  addons: [],
  framework: {
    name: '@storybook/angular',
    options: {
      // angularBrowserTarget: null tells @storybook/angular to run without
      // an Angular CLI browser target (required for Nx Angular libraries).
      angularBrowserTarget: null,
    },
  },
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
