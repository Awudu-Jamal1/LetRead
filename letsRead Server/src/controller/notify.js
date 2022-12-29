const {notifications,User} = require("../models")

module.exports={
    async get(req,res){
        try {
            const notify = await notifications.findAll({where:req.query,include:[User]})
            res.send(notify)    
        } catch (error) {
            res.send("error from notify")
        }
        
    }
}