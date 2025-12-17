const { Router } = require('express');
const multer = require('multer');
const controller = require('../controllers/incidents.controller');

const router = Router();
const upload = multer(); 

router.get('/types', controller.getIncidentTypes);
router.post('/routes/:routeId', upload.any(), controller.sendIncident);

module.exports = router;