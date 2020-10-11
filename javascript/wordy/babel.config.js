module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: 'current',
        },
        useBuiltIns: false,
      },

    ],
  ],
  plugins: ["@babel/plugin-syntax-bigint", ["@babel/plugin-proposal-pipeline-operator", { "proposal": "smart" }]]
};
