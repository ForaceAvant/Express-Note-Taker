const express = require("express");
const apiRoute= require("./routes/apiRoute");
const htmlRoute = require("./routes/htmlRoute");

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))