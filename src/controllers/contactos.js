const { status } = require('express/lib/response');
const contacto = require('./../models/contacto');
const jwt = require('jsonwebtoken');

module.exports={
    getAll: (req,res)=>{
        const token = req.headers.authorization;
        console.log('Token:', token);
        // jwt.verify(token, process.env.SECRET, (err,decoded)=>{
            contacto.find({status:1, userId: decoded._id})
            .then(data=>{res.send(data);})
            .catch(err=>{res.status(400).send('algo salio mal')});
        // })
       
    },
    ver:(req,res)=>{
        const dato = req.params.dato;
        contacto.findOne({status:1, _id:dato})
            .then(data=>{
                res.send(data);
            })
            .catch(err=>{res.status(400).send('algo salio mal')});
        },
    create:(req,res)=>{
        const data = req.body;
        contacto.create(data).then(response=>{
            res.send(response);
        }).catch(e=>{})
        
    }
}