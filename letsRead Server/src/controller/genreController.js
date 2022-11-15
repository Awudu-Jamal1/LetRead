
const {Genre,Book} = require("../models")

module.exports = {
    async show(req,res){
        console.log(req.params)
        const genres = await Genre.findOne({
            where:req.params,include:Book
        })
        res.send(genres)
    }
}