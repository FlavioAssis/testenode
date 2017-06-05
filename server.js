var app = require('./config/express')();
var http = require('http');

require('./config/database')('mongodb://localhost/testebanco');

http.createServer(app).listen(app.get('port'), function() {
  console.log('Servidor rodando: ' + app.get('port'));
});
