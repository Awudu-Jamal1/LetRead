const { Op } = require("sequelize")
const {Rating,Book} = require("../models")

module.exports ={
    async ratings(req,res){
        let rates = await Rating.create(req.body)
        const bookid=req.body.book_id
        console.log(bookid)
        const one = await Rating.findAndCountAll({
            where:{rate:1,
                book_id:bookid}
        })
        const two = await Rating.findAndCountAll({
            where:{rate:2,
                book_id:bookid}
        })
        const three = await Rating.findAndCountAll({
            where:{rate:3,
                book_id:bookid}
        })
        const four= await Rating.findAndCountAll({
            where:{rate:4,
                book_id:bookid}
        })
        const five = await Rating.findAndCountAll({
            where:{rate:5,
            book_id:bookid}
        })
        const total = await Rating.findAndCountAll({
            where:{
   book_id:bookid}
        })


    const average = (1*one.count+2*two.count+3*three.count+ 4*four.count+ 5*five.count)/total.count
    
const result = await Book.update({review:average.toFixed(1)},{
    where:{
        id:bookid
    }
})
console.log(result)
       
        
    },
    async get( req,res){
        try {
            const book = req.query.book_id
            const user = req.query.user_id
            const rate= await Rating.findOne({
                where:{
                    [Op.and]:[
                        {book_id:book},
                        {user_id:user}
                    ]
                }
            })
           res.send(rate.toJSON())
            
        } catch (error) {
            console.log(error)
            
        }
      
    }
}