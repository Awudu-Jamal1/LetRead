const {Book,Author} = require("../models");
const Sequelize = require('sequelize');



const Op = Sequelize.Op
module.exports = {
  async index(req, res) {
    try {
      let books = null;
        books = await Book.findAll({
         include: [ Author]
        });
      

      res.send(books);

     
    } catch (error) {
      console.log(error)
      res.status(500).send({
        error: "data can't be fetched",
      });

    }
  },
  async searches(req,res){
    const search = req.params.search
    let books =null
    if(search){
      books = await Book.findAll({limit:5,
        where: {
          [Op.or]: ["title", "author", "publisher"].map((key) => ({
            [key]: {
              [Op.like]: `%${search}%`,
            },
          })),
        },
      });
    }else{
      books={}
    }
    
        res.send(books)
      
  },
  async show(req, res) {
   
    try {
  
  let Id = req.params.bookId
    //  const book = await Book.findByPk(req.params.bookId);
    const book = await Book.findByPk(Id,{
          include: [ Author ]
        }
      );
      res.send(book);
      console.log("GGG"+book);
    } catch (error) {
      console.log(error)
      res.status(500).send({
        error: "data can't be fetched",
      });
    }
  },
  async put(req, res) {
    try {
      const book = await Book.update(req.body, {
        where: {
          id: req.params.bookId,
        },
      });
      res.send(req.body);
    } catch (error) {
      res.status(500).send({
        error: "error occurred during update",
      });
    }
  },

  async post(req, res) {
    console.log(req.body)

    try {
      const books = await Book.create(req.body);
      res.send(books);
      console.log(books)
    } catch (error) {
      console.log(error)
    }
  },
};
