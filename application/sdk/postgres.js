require('../config');
const { Pool, Client } = require('pg');

async function query(sql) {

    const client = new Client({
        connectionString: process.env.DATABASE_PG,
    })
    await client.connect();
    const res = await client.query(sql);
    await client.end();
    return res;
}

module.exports = query;
