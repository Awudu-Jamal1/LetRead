const Joi = require("joi");

module.exports = {
  register(req, res, next) {
    const schema = Joi.object({
      firstName: Joi.string().min(3).max(30).required(),
      userName: Joi.string().alphanum().min(3).max(30).required(),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
      switch (error.details[0].context.key) {
        case "firstName":
          res.status(400).send({
            error: "Invalid name",
          });
          break;
        case "userName":
          res.status(400).send({
            error: "Invalid username",
          });
          break;
        case "email":
          res.status(400).send({
            error: "You must provide a valid email address",
          });
          break;
        case "password":
          res.status(400).send({
            error: "You must provide a valid Password",
          });

          break;

        default:
          res.status(400).send({
            error: "Invalid registration information",
          });
          break;
      }
    } else {
      next();
    }
  },
};
