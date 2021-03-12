const express = require('express');
const bp = require('body-parser');

const app = express();
const port = 3000;

app.use(bp.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
})
app.post('/', function(req, res) {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    res.send("The answer is: " + result);
    console.log(req.body);
})

app.get('/bmi', function(req, res) {
    res.sendFile(__dirname + "/bmi.html");
})
app.post('/bmi', function(req, res) {
    let h = parseFloat(req.body.height);
    let w = parseFloat(req.body.weight);
    let result = Math.floor(w / (h * h));
    res.send("Your BMI is: " + result);
})

app.listen(port, console.log(`Listening on port: ${port}...`));