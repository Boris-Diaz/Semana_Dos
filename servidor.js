const ex = require('express');
const path = require('path');

const app = ex();


app.use(ex.static("act_uno/build"));

app.listen(5500, function() {
    console.log("Servidor en línea")
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+"/build/index.html"));
    
});

app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname+"/build/index.html"));
    
});

app.get('/actividades', function(req, res) {
    res.sendFile(path.join(__dirname+"/build/index.html"));
    
});
