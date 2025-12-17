const { Router } = require('express');
const multer = require('multer');
const controller = require('../controllers/opts.controller');

const router = Router();
const upload = multer(); 

router.get('/programming', controller.getProgramming);
router.get('/:code', controller.getOptDetail);
router.get('/routeStops/:routeStopId', controller.getRouteStop)
router.post('/routeStops/:routeStopId/tolls', upload.any(), controller.sendTollReceipt)
router.post('/routeStops/:routeStopId/implements', controller.sendImplements)

module.exports = router;