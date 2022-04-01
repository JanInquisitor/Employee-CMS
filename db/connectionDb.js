const mysql = require('mysql2');

function connectionDatabase() {
    return mysql.createConnection(
        {
            host: '127.0.0.1', // This needs to be '127.0.0.1' instead of local host
            user: 'root',
            password: '',
            database: 'employee_cms_db',
            port: 3306,
        },
    );

    // connection.connect((err) => {
    //     if (err) throw err;
    //     console.log("\n Database Connected!")
    // })

}

module.exports = connectionDatabase;