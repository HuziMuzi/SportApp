module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          src: './src',
          '@screens': './src/screens',
          types: './src/shared/types',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
