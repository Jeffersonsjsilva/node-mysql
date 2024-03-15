const express = require('express'); //importando express

const router = express.Router(); //ferramenta do express, ira fazer uma rota a partir da raiz da pasta

const dbConecta = require('../models/dbConnection'); //conexão feita dentro do arquivo dbconnection.js

router.get('/',(req,res) =>{
    dbConecta.query('select * from tbtarefas order by data',(err, result) =>{
        if(err) throw err; //mostra o erro e lança ele
        res.json(result);
    });
});

router.get('/:id',(req,res) =>{
    const id = req.params.id
    dbConecta.query('select * from tbtarefas where id = ?',[id], (err,result)=>{
        if(err) throw err;
        res.json(result);
    });
});

router.get('/data/:data',(req,res) =>{
    const data = req.params.data
    dbConecta.query('select * from tbtarefas where data = ?',[data],(err,result) =>{
        if(err) throw err;
        res.json(result);
    });
});

router.post('/',(req,res)=>{
    const{titulo, descricao, data, status} =req.body;

    dbConecta.query('insert into tbtarefas(titulo, descricao, data, status) values (?,?,?,?);',
    [titulo, descricao, data, status], 
    (err, result) =>{
        if(err)
        {
        res.status(500).json({mensagem: 'Erro ao adicionar tarefa'});
        }else
        {
            res.status(200).json({
                mensagem: "Tarefa adicionada com sucesso",
                body:req.body
            });
        }
    });
});

router.delete('/:id', (req,res)=>{
    const id = req.params.id;

    dbConecta.query('delete from tbtarefas where id = ?', [id],(err) =>{
        if(err) throw err;
        res.status(201).json({
            mensagem: `Tarefa de id: ${id}, deletado com sucesso`
        })
    })
})

router.put('/:id', (req, res) =>{
    const id = req.params.id;
    const {titulo, descricao, data, status} = req.body

    dbConecta.query('update tbtarefas set titulo = ?, descricao = ?, data = ?, status = ? where id = ?',[titulo, descricao, data, status, id],(err)=>{
        if(err) throw err;
        res.status(201).json({
            mensagem:`Alteração aplicada!`
        })
    })
})


module.exports = router; //exportando