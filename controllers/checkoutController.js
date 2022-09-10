<<<<<<< HEAD
const fs = require("fs");
const usersJson = require('../users.json')
const bcrypt = require('bcrypt')

let listaRotasCheckout = [
    {'rota':'checkout1','metodo':'checkout1'},
    {'rota':'checkout2','metodo':'checkout2'},
    {'rota':'checkout2F','metodo':'formaPagamento'},
    {'rota':'checkout3','metodo':'checkout3'},
    {'rota':'checkout4','metodo':'checkout4'},
    {'rota':'checkout4P','metodo':'PreviewFinalVenda'},
    {'rota':'checkoutRes','metodo':'checkoutRes'},
    {'rota':'checkoutRes2','metodo':'checkoutRes2'},
    {'rota':'checkoutResPrevVenda','metodo':'checkoutResPrevVenda'},
    {'rota':'sucessoCompra','metodo':'sucessoCompra'},
    {'rota':'sucessoCompra1','metodo':'sucessoCompra1'}
    
]


const controllerCheckout = {
      
    metodo: (req, res) => {
              const rotaA = req.params.rota
              const rotaI = listaRotasCheckout.find(i => i.rota == rotaA);
              const rotaB = rotaI.rota
              const rotaFinal = `./Checkout/${rotaB}`;
              
          res.render(rotaFinal)},
    };

    module.exports = controllerCheckout;




=======
const controllerCheckout = {
    CHECKOUT1: (req, res) =>{
        res.render('../views/Checkout/checkout1');
    },
    CHECKOUT2: (req, res) =>{
        res.render('../views/Checkout/checkout2');
    },
    CHECKOUT3: (req, res) =>{
        res.render('../views/Checkout/checkout3');
    },
    CHECKOUT4: (req, res) =>{
        res.render('../views/Checkout/checkout4');
    },
    CHECKOUTSUCESSO: (req, res) =>{
        //fazer o redirect
    }
}

module.exports = controllerCheckout;
>>>>>>> master
