const { Router } = require('express');
const controller = require('../controllers/checkpoints.controller');

const router = Router();

router.get('/types', controller.getCheckpointTypes);
router.post('/', controller.registerCheckpoint);

module.exports = router;