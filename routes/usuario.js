var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioController')

router.get('/cadastro2',usuarioController.exibirCadastroSucesso)
router.get('/cadastro',usuarioController.exibirCadastro)
router.post('/cadastro',usuarioController.cadastra)
router.post('/login', usuarioController.auth)


module.exports = router