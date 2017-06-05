var mongoose = require('mongoose');
var db = require('../../config/database')();
var Schema = mongoose.Schema;

var schema = new Schema({
  nome: {type: String, required: true},
  idade: {type: Number, required: true, index: {unique: false}}
});

module.exports = db.model('Dado', schema);
