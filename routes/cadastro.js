var express = require('express');
var router = express.Router();
var cadastroController = require('../controller/cadastroController');



router.get('/', cadastroController.viewForm);

router.post('/criar', cadastroController.saveForm);

router.get('/sucesso', cadastroController.sucesso);


module.exports = router;
