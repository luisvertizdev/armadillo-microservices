const { Router } = require('express');
const multer = require('multer');
const controller = require('../controllers/workers.controller');

const router = Router();
const upload = multer(); 

router.get('/:workerId/opts', controller.getOpts);
router.post('/:accountId/verify', upload.any(), controller.sendSelfie);

module.exports = router;