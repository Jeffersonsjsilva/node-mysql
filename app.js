/* não é necessario subir a pagina node_modulos para o github pois quando utilizamos o comando npm i ele utilizar as credenciais do package.json para instalar os modulos necessarios


metodos CRUD sql em node

select = get
insert = post
update = put(ALTERA SOMENTE 1 ITEM DA TABELA) /patch (ALTERA VARIOS ITENS DE UMA COLUNA)
delete = delete


req = REQUISIÇÃO / quando eu interejao com o banco
res = RESPOSTA / quando o banco interaje comigo
*/

const express = require('express'); // importando express
const port = 3000; // guardando a porta usada no servidor
const app = express(); // instanciando dentro de uma variavel para utilizar em funções
const taskRouter = require('./routes/task-router'); //requirindo a rota

app.use(express.json());

app.use('/tarefa', taskRouter);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`); //testando se o servidor esta funcionando
});

app.get('/', (req,res) =>{
    res.send("Testando API");  //recebendo resposta utilizando get(select) e o parametro res(resposta)
});