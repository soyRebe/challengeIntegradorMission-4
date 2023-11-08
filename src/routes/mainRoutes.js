const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');


/* MAIN ROUTES */

/*app.get('/index.html', ( req, res )=>{  // se comenta para poder usar el metodo use y usar la carpeta public-
    res.sendFile(__dirname + "./index.html");
    });*/
    



/* MAIN ROUTES */

router.get('/home', mainController.home );
router.get('/contact', mainController.contact);
router.get('/about', mainController.about);
router.get('/faqs', mainController.faqs);


module.exports = router;
    