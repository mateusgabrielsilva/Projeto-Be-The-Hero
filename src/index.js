const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

/**
 * Rota / Recurso
 */

 /**
  * Metodos HTTP
  * 
  * GET : Buscar uma informação no back-end
  * POST : Criar uma informacao no back-end
  * PUT : Alterar uma informação no back-end
  * DELETE : Deletar uma informação no back-end
  */

  /**
   * Tipos de parametros 
   * 
   * Query : Parametros nomeados enviados na rota apos o "?" (Filtros, paginação)
   * Route Params : Parametros utilizados para identificar recursos
   * Request Body : Corpo da requisição, utilizando para criar ou alterar recursos
   */

   /**
    * Banco de Dados
    * 
    * SQL : MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * No SQL : MongoDB, CouchDB, etc
    */

    /**
     * Driver : SELECT * FROM users
     * Query Buider: table('users).select
     */



