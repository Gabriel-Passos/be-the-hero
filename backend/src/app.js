/* 
    Métodos HTTP:    

    GET: Buscar/listar uma informação do back-end
    POST: Criar uma infromação no back-end
    PUT: Alterar uma informação no back-end
    DELETE: Deletar uma informação no back-end
*/

/*
    Tipos de parâmetros:

    Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
    Route Params: Parâmetros utilizados para identificar recursos
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
    SQL: MySQL, SELite, PostgreSQL, Oracle, Microsoft SQL Server (SQL: Mais utilizado no mercado)
    NoSQL: MongoDB. CouchDB, etc...
*/

/**
 *  Driver: SELECT * FROM users
 *  Query Builder: table('users').select('*').where()
 */

const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;