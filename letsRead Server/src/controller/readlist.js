const {Bookmark,Book,post} = require("../models")


module.exports={
    async post (req,res){
        console.log(req.body)
        const {UserId,BookId,status,message}=req.body
        const result = await Bookmark.create({UserId:UserId,
            BookId:BookId
            })
        const posting = await post.create({user_id:UserId,
            book_id:BookId,
            status: status,
            message:message})
    }
,
    async show(req,res){
console.log(req)
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
