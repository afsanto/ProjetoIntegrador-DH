const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productController = require('../controllers/productController');

router.get('/', productController.indexFundo); 
router.get('/', productController.indexRaso);


module.exports = router;