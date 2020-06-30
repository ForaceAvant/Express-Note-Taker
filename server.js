const express = require("express");
const apiRoute = require("./routes/apiRoute");
const htmlRoute = require("./routes/htmlRoute");

//Initialization of server
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

apiRoute(app);
htmlRoute(app);



app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
