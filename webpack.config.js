"use strict"

const path = require("path")

module.exports = {
    "entry": path.join( __dirname, "src", "index"),
    "mode": "development",
    "output": {
        "path": path.join(__dirname, "html", "dist"),
        "filename": "index.js"
    }
}
