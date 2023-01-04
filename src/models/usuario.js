const {Schema, model,} = require('mongoose');
//Modelo que se usa para esete contenedor

//1:Activo
//2:bloqueado
const usuarioSchema = new Schema({
    nombre:{type:String},
    correo:{type:String},
    password:{type:String},
    status:{type:Number, default: 1 },
});


//Aqui es donde se adapta al contenedor que vas a usar
module.exports = model('tbl-usuario', usuarioSchema);

