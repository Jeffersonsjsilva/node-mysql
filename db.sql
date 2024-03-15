DROP DATABASE IF EXISTS dblist;

CREATE DATABASE IF NOT EXISTS dblist;

USE dblist;

CREATE TABLE IF NOT EXISTS tbtarefas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT,
    data DATE,
    status BOOLEAN DEFAULT false
);

INSERT INTO tbtarefas (titulo, descricao, data, status) VALUES 
('Desenvolver um projeto em Python', 'Criar um projeto para praticar programação em Python e aplicar os conceitos aprendidos.', '2024-02-10', false),
('Estudar Banco de Dados Relacional', 'Revisar modelagem de dados e praticar consultas SQL.', '2024-02-15', false),
('Configurar um servidor web', 'Aprender a configurar um servidor web, instalar e hospedar uma aplicação básica.', '2024-02-20', true),
('Participar de um hackathon', 'Encontrar um hackathon online ou presencial e participar para desenvolver habilidades práticas.', '2024-02-25', false),
('Preparar uma apresentação sobre segurança cibernética', 'Pesquisar e criar uma apresentação sobre os fundamentos da segurança cibernética.', '2024-03-01', true);


select * from tbtarefas;