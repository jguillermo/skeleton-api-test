/**
 *
 * Modo de uso :
 *
 * const mysql = require('@mysql');
 *
 mysql('SELECT 4 + 4 AS solution', function (results) {
    console.log('The solution is: ', results[0].solution);
});
 */

require('../config');
var mysql = require('mysql');

function getConnection() {
    //'mysql://user:pass@host:port/dbname';
    let connection = mysql.createConnection(process.env.DATABASE_MYSQL);
    connection.connect();
    return connection;
}

function query(sql) {
    return new Promise(function (resolve, reject) {
        let conection = getConnection();
        conection.query(sql, function (error, results, fields) {
            if (error) {
                console.log('env.DATABASE', process.env.DATABASE_MYSQL, 'conection', conection.config, '**error**', error, '**throw error**');
                throw error;
                reject(error);
            }
            conection.destroy();
            resolve(results);
        });
    });
}

module.exports = query;
