const express = require('express'); //importando express

const router = express.Router(); //ferramenta do express, ira fazer uma rota a partir da raiz da pasta

const dbConecta = require('../models/dbConnection'); //conexão feita dentro do arquivo dbconnection.js

router.get('/',(req,res) =>{
    dbConecta.query('select * from tbtarefas order by data',(err, result) =>{
        if(err) throw err; //mostra o erro e lança ele
        res.json(result);
    })
});

router.get('/:id',(req,res) =>{
    const id = req.params.id
    dbConecta.query('select * from tbtarefas where id = ?',[id], (err,result)=>{
        if(err) throw err;
        res.json(result);
    })
});

router.get('/data/:data',(req,res) =>{
    const data = req.params.data
    dbConecta.query('select * from tbtarefas where data = ?',[data],(err,result) =>{
        if(err) throw err;
        res.json(result);
    })
})

module.exports = router; //exportando