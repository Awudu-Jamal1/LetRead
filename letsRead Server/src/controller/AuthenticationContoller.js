//const { token } = require('morgan')
const User = require("../models/User.model")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const { token } = require('morgan')

const saltRounds = 10
function jwtSignUser(user) {
    const ONE_WEEk =60*60*24*7
    return jwt.sign(user,config.authentication.jwtSecret,{
        expiresIn: ONE_WEEk
    })
    
}

module.exports = {
    async register (req,res){
        try {
            
            const { email, password} =req.body
             const salt = await bcrypt.genSalt(10);
             // now we set user password to hashed password
            const pass = await bcrypt.hash(password, salt);
            console.log(pass)
            const user= await User.create({
                email: email,
                password: pass
            })   
            const userJson = user.toJSON()
            console.log("user =" ,userJson)
            res.send({user : userJson,
                token : jwtSignUser(userJson)})
        } catch (error) {
            res.status(400).send({
                error: "This email account is already in use."
            })
            
        }   
        },
        async login (req,res){
            try {
                const {email, password}=  req.body
                const user= await User.findOne({
                    where:{
                        email : email
                    }
                })

                if(!user){
                    return res.status(403).send({
                        error:'The login information incorrect'
                    })
                }
                const isPasswordValid = await bcrypt.compare(password, user.password)
                if(!isPasswordValid){
                    return res.status(403).send({
                        error:'Wrong Password'
                    })
                }
                const userJson = user.toJSON()
                res.send({
                    user : userJson,
                    token : jwtSignUser(userJson),
                    
                })
            } catch (error) {
                res.status(500).send({
                    error: "Server error"
                })
                
            }  
        }  
}
