const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    password: 'uday',
    database: 'library',
    user: 'postgres'
});

client.connect().then(success => {
    console.log('Database connected successfully');
}).catch(err => {
    console.log('DB Error', err);
});

module.exports = client;