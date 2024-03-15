//Criando uma conexão com o banco de dados

const mysql = require("mysql");

const conecta = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'dblist'
}); // json com as informações do banco

conecta.connect((err)=>{
    if(err)
    {
        console.log("Erro ao conectar",err);
        return;
    }
    console.log("Conectado com sucesso");
});

module.exports = conecta; //exportando