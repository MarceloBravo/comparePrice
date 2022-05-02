const cors = require('cors');
var express=require('express');
const bodyParser = require('body-parser');

var app=express();
app.use(cors());

app.set('port', process.env.PORT || 3001);

app.use(bodyParser.json());

require('./routes/serpapi.js')(app, null);

app.listen(app.get('port'), '192.168.43.118',() => {    
    console.log('Servidor activo en el puerto ' + app.get('port'))
})