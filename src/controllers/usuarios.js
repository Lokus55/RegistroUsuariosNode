// const { response } = require('express');
const jwt = require('jsonwebtoken');
const modelo = require('./../models/usuario');

module.exports = {
    
    login:(req,res)=>{
        const credenciales = req.body;
        modelo.findOne(credenciales).then(response=>{
            if(response){
                console.log(response);
                const {_id, nombre} = response;
                const token = jwt.sign({_id, nombre}, process.env.SECRET);
                
                jwt.verify(token, process.env.SECRET, (err,decoded)=>{
                    console.log(decoded);
                })
                res.send(token);
                // res.send('okay');
            }else{
                res.sendStatus(401)
            }
        }).catch(err=>{
            res.sendStatus(400)
        })
        
    },
    registro: (req,res)=>{
        const datos = req.body;
        modelo.create(datos).then(response =>{
            res.send(response);
        }).catch(err=>{
            res.sendStatus(400);
        });
    }
}