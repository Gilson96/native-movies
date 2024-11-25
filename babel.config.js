module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }, 'module:metro-react-native-babel-preset'],
      "nativewind/babel",
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    plugins: [
      // Required for expo-router
      "react-native-reanimated/plugin",
    ]
  };
};