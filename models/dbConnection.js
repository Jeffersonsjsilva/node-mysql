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
        console.log("deu ruim tranca o curso",err);
        return;
    }
    console.log("deu bom, continua o curso paizao");
});

module.exports = conecta; //exportando