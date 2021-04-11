const cssvariables = require('postcss-css-variables');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = () => ({
  plugins: [
    cssvariables({
      variables: {
        '--some-var': 'blue',
      },
    }),
    postcssPresetEnv({}),
  ],
});
