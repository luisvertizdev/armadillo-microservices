const { Router } = require('express');
console.log('🔥 implements.routes.js LOADED');
const controller = require('../controllers/implements.controller');

const router = Router();

router.get('/', controller.getImplements);
router.get('/categories', controller.getImplementsCategories);

module.exports = router;