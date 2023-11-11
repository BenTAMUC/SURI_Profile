// imports
const express = require("express");
const path = require("path");

// create express app and set port
const app = express();
const PORT = process.env.PORT || 3001;

// set path to client build
app.use(express.static(path.join(__dirname, "../client/dist"))); // path to client build, cd to client folder and run "npm run build" to make sure you have a dist folder

// start server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});