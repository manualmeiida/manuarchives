const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

router.post('/', produtosController.criarProdutos);
router.get('/', produtosController.listarProdutos);
router.put('/:id', produtosController.atualizarProdutos);
router.delete('/:id', produtosController.deletarProdutos);

module.exports = router;