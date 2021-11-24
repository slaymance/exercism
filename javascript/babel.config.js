module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
        useBuiltIns: 'entry',
        corejs: 3.14,
      },
    ],
  ],
  plugins: [
    '@babel/plugin-syntax-bigint',
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'smart' }],
    '@babel/plugin-syntax-class-properties',
  ],
};
