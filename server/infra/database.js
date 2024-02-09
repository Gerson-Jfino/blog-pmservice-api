const mysql = require('mysql');

const pool = mysql.createPool({
    "user": 'root',
    "password": '',
    "database": 'pm_service',
    "host": 'localhost',
    "port": 3306,
    "acquireTimeout": 6000000
});

exports.execute = (query, params = []) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((error, conn) => {
            if (error) {
                reject(error)
            } else {
                conn.query(query, params, (error, results, fields) => {
                    conn.release()
                    if(error){
                        reject(error)
                    } else {
                        resolve(results)
                    }
                })
            }
        })
    })
}
// module.exports = pool;
exports.pool = pool;