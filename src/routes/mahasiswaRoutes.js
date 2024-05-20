const express = require('express');
const router = express.Router();
const mahasiswaController = require('../controllers/mahasiswaController');

router.get('/dosen', mahasiswaController.getDosen);
router.get('/:nim', mahasiswaController.getMahasiswa);
router.get('/', mahasiswaController.getAllMahasiswa);
router.post('/', mahasiswaController.addMahasiswa);
router.put('/:nim', mahasiswaController.updateMahasiswaStatus);

module.exports = router;
