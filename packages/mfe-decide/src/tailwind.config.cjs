const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const preset = require('../design-tokens/tailwind.preset.cjs');

module.exports = {
  presets: [preset],
  content: [
    './src/**/*.{html,ts}',
    ...createGlobPatternsForDependencies(__dirname),
  ],
};