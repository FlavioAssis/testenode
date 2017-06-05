var controller = require('../controllers/cs_teste');

module.exports = function(app) {
  app.get('/dados', controller.listaDados);
};
