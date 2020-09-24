const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('Weather API Home');
})

app.get('/api/v1/weather', function (req, res) {
   let weather = {
      Temp: 90.5,
      Unit: "fahrenheit",
      Cloudy: false,
      PrecipitationChance: 0
    
    }
   res.send(weather);
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
