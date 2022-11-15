const {Bookmark,Book} = require("../models")


module.exports={
    async post (req,res){
        const result = await Bookmark.create(req.body)
    }
,
    async show(req,res){
console.log(req.body)
        const result = await Bookmark.findAll({where:req.body,
            include:[Book]
        })
        res.send(result)
    },
    async delete (req,res){
console.log(req.query)
const result = await Bookmark.destroy({where:req.query})

    }
}