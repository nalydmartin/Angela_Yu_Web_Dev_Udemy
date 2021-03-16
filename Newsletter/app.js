const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const port = 3000;


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


// Routes
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post('/', function(req, res) {
    let fName = req.body.fName;
    let lName = req.body.lName;
    let email = req.body.email;

    console.log(fName, lName, email);

})




app.listen(port, console.log(`Listening on port: ${port}...`));


// Mailchimp API Key
// c015f548ad42b60b8cc5bc5c739eec70-us1

// Mailchimp List ID
// 8abb66ce48