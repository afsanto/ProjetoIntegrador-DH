var express = require('express');
var router = express.Router();
const controllerCheckout = require('../controllers/checkoutController');
<<<<<<< HEAD
const {check: checar} = require('express-validator'); // importar validator
let validarVEnda =[
    // cirar a validação para a venda
]; //array de validações

router.get('/:rota', controllerCheckout.metodo);


/*router.post('/sucessoCompra', validarVEnda, controllerCheckout.SALVARVENDA)*/

=======

router.get('/checkout1', controllerCheckout.CHECKOUT1);
router.get('/checkout2', controllerCheckout.CHECKOUT2);
router.get('/checkout3', controllerCheckout.CHECKOUT3);
router.get('/checkout4', controllerCheckout.CHECKOUT4);


>>>>>>> master
module.exports = router;
