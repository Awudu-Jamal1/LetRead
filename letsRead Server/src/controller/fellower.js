const {followers,notifications} = require('../models')

module.exports ={
    async post(req,res){
        try {
            const{user_id, fellower_id,status,message}=(req.body)
            const followed = await followers.create({
                user_id: user_id, fellower_id: fellower_id,
            })
            const notify = await notifications.create({
                user_id:fellower_id,Message:message,status:status})
            res.send(followed)     
        } catch (error) {
            res.status(500).send({
                error: "server error",
              });
        } 
    },
    async delete(req,res){
        try {
            const fellowed  = await followers.destroy({where:req.query})
        } catch (error) {
            res.status(500).send({
                error: "server error",
              });
        }
        
    },
    async show(req,res){
        const fellowed = await followers.findAll({where:req.query})
       res.send(fellowed)
        //console.log(fellow)
    }
}