const express = require('express');
const app = express();
const port = 3000;


// ROUTES
const weatherRoutes = require("./routes/weather.routes")(app);


app.listen(port, console.log(`Listening on port: ${port}...`));