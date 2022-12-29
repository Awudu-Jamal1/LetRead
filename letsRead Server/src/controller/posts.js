const {post,Book,User} = require('../models')

module.exports={
    async show(req,res){
        try {
            console.log(req.query)
            const posts = await post.findAll({include:[Book,User]})
            res.send(posts)   
        } catch (error) {
            console.log(error)
        }
        

    }
}