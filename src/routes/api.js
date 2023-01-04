//GET /contactos
const router = require('express').Router();

const contactosController = require("../controllers/contactos");
const userCtrl = require("../controllers/usuarios");
//Aqui estan as rutas que se usan para conseguir la informacion
//Contactos
router.get('/contactos/:dato', contactosController.getAll);
router.get('/contactos/byId/:dato', contactosController.ver);
router.post('/contactos', contactosController.create);

//Usuarios
router.post('/registro', userCtrl.registro);


module.exports = router;