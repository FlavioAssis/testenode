/*
var lista = [
  {'nome': 'Flavio', 'idade': 23},
  {'nome': 'Luisa', 'idade': 22},
  {'nome': 'Amanda', 'idade': 24},
  {'nome': 'Isadora', 'idade': 23}
];
*/
var Model = require('../models/dado.js');

exports.listaDados = function(req, res) {
  var tango = Model.find({}, function(erro, lista) {
    if(erro) console.log(erro);
    console.log('Lista:' + lista);
  });
};
