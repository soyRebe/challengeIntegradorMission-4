const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.admin);

router.get('/create/', mainController.getAdminCreate);

router.post('/create/',mainController.postAdminCreate);

router.get('/edit/:id', mainController.getAdminEditById);

router.put('/edit/:id', mainController.putAdminEditById);

router.delete('/delete/:id', mainController.deleteAdmById);


module.exports = router;