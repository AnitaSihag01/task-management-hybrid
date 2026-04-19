const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',       
    host: 'localhost',
    database: 'Taskdb',     
    password: 'postgre123',
    port: 5432,
});

module.exports = pool;