const {Schema, model,} = require('mongoose');
//Modelo que se usa para esete contenedor
const contactoSchema = new Schema({
    nombre:{type:String},
    telefono:{type:String, default: '0'},
    correo:{type:String},
    status:{type:Number, default: 1 },
    idUsuario:{type:String}
});


//Aqui es donde se adapta al contenedor que vas a usar
module.exports = model('tbl-contactos', contactoSchema);

