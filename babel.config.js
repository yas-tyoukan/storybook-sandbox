module.exports = (api) => {
  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '79',
        },
        useBuiltIns: 'entry',
        corejs: 3,
      },
    ],
    [
      '@babel/preset-react',
      {
        development: !api.env('production'),
      },
    ],
  ];

  const plugins = [];

  return {
    presets,
    plugins,
  };
};
