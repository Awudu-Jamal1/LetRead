const { Bookmark, Book, post } = require("../models");
const { Op } = require("sequelize");

module.exports = {
  async post(req, res) {
    console.log(req.body);
    const { UserId, BookId, status, message } = req.body;
    const find = await Bookmark.findOne({
      where: {
        [Op.and]: [{ UserId: UserId }, { BookId: BookId }],
      },
      include: [Book],
    });
  
    if (find) {
      const result = await Bookmark.update(
        { status: status, message: message },
        {
          where: { [Op.and]: [{ UserId: UserId }, { BookId: BookId }] },
        }
      );

    } else {
      const result = await Bookmark.create({
        UserId: UserId,
        BookId: BookId,
        status: status,
        message: message,
      });
      const posting = await post.create({
        user_id: UserId,
        book_id: BookId,
        status: status,
        message: message,
      });
    }
  },
  async show(req, res) {
    const { UserId, BookId } = req.query;
    let result;
    if(BookId){
     result = await Bookmark.findAll({
      where: {
        [Op.and]: [{ UserId: UserId }, { BookId: BookId }],
      },
      include: [Book],
    });}
    else{
        result = await Bookmark.findAll({
            where: {
               UserId: UserId 
            },
            include: [Book],
          });
    }
    res.send(result);
  },
  async delete(req, res) {
    console.log(req.query);
    const result = await Bookmark.destroy({ where: req.query });
  },
};
