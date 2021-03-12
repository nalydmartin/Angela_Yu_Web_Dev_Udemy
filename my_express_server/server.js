const express = require('express');
const app = express();
const port = 8000;

app.get("/", function(req, res) {
    res.send("<h1>HELL YEAHHH</h1>")
})

app.get('/contact', function(req, res) {
    res.send("<h2>Email: nalydmartin7@gmail.com</h2>")
})

app.get('/about', function(req, res) {
    res.send("<h2>About: 22 software engineer looking for a job and a new home.</h2>")
})

app.listen(port, console.log("Listening on port: " + port));

