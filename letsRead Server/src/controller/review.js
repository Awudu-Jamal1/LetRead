const { review ,post} = require("../models");
module.exports={
    async post(req,res){
       
        try{
            const {title,body,user_id,book_id,status} = req.body
const reviews =await review.create({title: ttitle,
                body:body,
                user_id:user_id,
                book_id:book_id})
const posting = await post.create({user_id:user_Id,
    book_id:book_Id,
    status: status,
    message:body})
//console.log(reviews.toJSON())
        }
        catch(error){
console.log(error)
        }
    },

    async show(req,res){
        try {

            const result = await review.findAll({
                where:{book_id:req.params}
            })
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
}