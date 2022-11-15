const { review } = require("../models");
module.exports={
    async post(req,res){
        try{
const reviews =await review.create(req.body)
console.log(reviews.toJSON())
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