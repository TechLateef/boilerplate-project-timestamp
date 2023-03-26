// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/:date", function(req, res){

  let unix_timestamp = req.params.date
  
  if(typeof unix_timestamp === 'string' && unix_timestamp.length > 10){
  res.json({ unix1: unix_timestamp,
  utc: new Date(unix_timestamp *1).toUTCString()})
    
  }else if(typeof unix_timestamp === 'string'){
    
    res.json({unix: new Date(unix_timestamp).getTime(), utc:new Date(unix_timestamp).toUTCString()})
  }

})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
