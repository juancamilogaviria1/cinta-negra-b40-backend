const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
          first_name: Joi.string().required(),
          last_name: Joi.number().integer(),
          email: Joi.string().email(),
          password: Joi.string(),
          // role: Joi.string().default('admin')
        }),
     }),
};

