module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@components': './src/components/',
            '@common': './src/common/',
            '@navigation': './src/navigation/',
            '@screens': './src/screens/',
            '@features': './src/features/',
          },
        },
      ],
    ],
  };
};
