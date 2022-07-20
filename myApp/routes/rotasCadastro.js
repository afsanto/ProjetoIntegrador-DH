var express = require('express');
var cadastroController = require('../controller/cadastroController');

var router = express.Router();


router.get('/cadastro', cadastroController);

/*criar a rota post para envio do formulário de cadastro*/

module.exports = router;
