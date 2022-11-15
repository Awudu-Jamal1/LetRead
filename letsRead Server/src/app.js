const bodyParser = require("body-parser")
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const {sequelize}= require("./models")
//const config = require(__dirname + '/../config/config.json')

const app =express()
app.use(morgan("combined"))
app.use(bodyParser.json())
app.use(cors())

require("./routes")(app)
//require('./passport')

  
sequelize.sync({alter: false})
.then(()=>{
    app.listen( 8081)
    console.log(`server started on 8080`)
})
