const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
          temp: Joi.string().required(),
          value: Joi.string().required(),
        }),
     }),
};
