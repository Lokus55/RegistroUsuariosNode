const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();


const apiRoutes = require("./src/routes/api");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(apiRoutes);

app.get('',(req, res)=>{
    res.send('api works');
})

// const uri = 'mongodb+srv://oscar:oscar123@cluster0.ay0bh.mongodb.net/dbase?retryWrites=true&w=majority';
const uri = process.env.MONGODB;

mongoose.connect(uri,(err)=>{
    if(err){
        console.log('no se pudo conectar a la base de datos');
    }else{
        console.log('si se pudo conectar a la base de datos');
        
        app .listen(port, ()=>{
            console.log('app is running in port' + port );
        });
    }
});


