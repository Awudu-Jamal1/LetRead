const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config.json");
const e = require("cors");
const { Op } = require("sequelize");

const saltRounds = 10;
function jwtSignUser(user) {
  const ONE_WEEk = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEk,
  });
}

module.exports = {
  async register(req, res) {
    try {
      const { firstName, userName, email, password } = req.body;
      const salt = await bcrypt.genSalt(10);
      const pass = await bcrypt.hash(password, salt);
      console.log(userName);
      const account = await User.create({
        firstName: firstName,
        userName: userName,
        email: email,
        password: pass,
      });
      const userJson = account.toJSON();
      res.send({ user: userJson, token: jwtSignUser(userJson) });
    } catch (error) {
      res.status(500).send({
        error: "server error",
      });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: { email: email },
      });
      console.log(user)
      if (!user) {
        return res.status(403).send({
          error: "incorrect Email",
        });
      }
      const Isvalidate = await bcrypt.compare(password, user.password);

      if (!Isvalidate) {
        console.log("Error", Isvalidate)
        return res.status(403).send({
          error: "wrong Password",
        });
      }
      const userJson = user.toJSON();
      res.send({ user: userJson, token: jwtSignUser(userJson) });
    } catch (error) {
      console.log(error);
    }
  },

  async update(req, res) {
    console.log(req.body);
    let users = null;
    const ids = req.body.id;
    users = await User.update(req.body, {
      where: { id: ids },
    });
    let result = await User.findByPk(users[0]);
    let userJson = result.toJSON();
    res.send(userJson);
  },
  async changeP(req, res) {
    try {
      const { id, old, news } = req.body;
      const user = await User.findOne({ where: req.body.id });
      const validation = await bcrypt.compare(old, user.password);
      const validation2 = await bcrypt.compare(news, user.password);
      if (!validation) {
        return res.status(403).send({
          error: "cant update wrong old password",
        });
      }
      if (validation2) {
        console.log("old password is similar to new change");
        return res.status(403).send({
          error: "old password is similar to new change",
        });
      }
      const salt = await bcrypt.genSalt(10);
      const pass = await bcrypt.hash(news, salt);
      const result = await User.update(
        { password: pass },
        {
          where: {id:id},
        }
      );
  res.send("passowrd has being changed")  
    } catch (error) {
      res.status(500).send({
        error: "Wrong password",
      });

      
    }
    
  },
};
