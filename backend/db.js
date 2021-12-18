const user = 'YOUR_USER'
const password = 'YOUR_PASSWORD'
const database = 'YOUR_DATABASE'

const Pool = require('pg').Pool;


const pool = new Pool({
    user: user,
    password: password,
    host: 'localhost',
    port: 5432,
    database: database
});

module.exports = pool;