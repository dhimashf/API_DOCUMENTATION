const express = require('express');
const router = express.Router();
const dosenController = require('../controllers/dosenController');

router.get('/pembimbing/:nip_pembimbing', dosenController.getMahasiswaByDosen);
router.get('/pembimbing', dosenController.getAllDosenPembimbing);
router.get('/penguji/:nip_penguji', dosenController.getMahasiswaByPenguji);
router.get('/penguji', dosenController.getAllDosenPenguji);

module.exports = router;
