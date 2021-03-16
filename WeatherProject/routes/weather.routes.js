const https = require('https');

// Home page
module.exports = (app) => {


    app.get('/', function(req, res) {

        https.get()

        res.send('You are seeing this from the routes folder!');
    })
}