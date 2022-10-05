<<<<<<< HEAD
var express = require('express');
var router = express.Router();
var cadastroController = require('../controller/cadastroController');



router.get('/', cadastroController.viewForm);

router.post('/criar', cadastroController.saveForm);

router.get('/sucesso', cadastroController.sucesso);


module.exports = router;
=======
// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const cadastroController = require('../controllers/cadastroController');

// ************ Middleware Require ************
const loggedUserMiddleware = require('../middlewares/loggedUserMiddleware');
//const loggedUserDataMiddleware = require('../middlewares/loggedUserDataMiddleware');


router.post('/cadastro', cadastroController.cadastra); 
router.get('/cadastro', cadastroController.index); 
router.get('cadastro/meusdados', cadastroController.meusDados)
//router.get('/logout', cadastroController.logout);



module.exports = router;
>>>>>>> master
