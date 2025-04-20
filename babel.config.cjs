// filepath: c:\Users\haris\OneDrive\Desktop\React-Series\React-Course\babel.config.js
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current", // Ensures compatibility with the current Node.js version
        },
      },
    ],
    [
      "@babel/preset-react",
      {
        runtime: "automatic", // Enables the new JSX transform
      },
    ],
  ],
};