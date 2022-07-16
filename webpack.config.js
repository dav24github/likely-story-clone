const path = require("path");

module.exports = {
  context: path.join(__dirname, "src"),
  entry: {
    helper: "./helper.js",
    home: "./home.js",
    projects: "./projects.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
};
