const path = require("path")

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "dist.js",
    path: path.resolve(__dirname, "dist")
  }
}