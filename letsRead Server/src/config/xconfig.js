const path = require('path')

module.exports = {
    port: process.env.PORT || 8081,
    db:{
        database: process.env.DB_NAME || 'bookhome',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'Aragami4',
        options:{
            // what type of database
            dialect: process.env.DIALECT || 'mysql',
            host: process.env.HOST || 'localhost',
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_secret || 'secret'
    }
}