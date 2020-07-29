import { celebrate, Joi, Segments } from 'celebrate';

export default celebrate({
  [Segments.QUERY]: Joi.object().keys({
    client_name: Joi.string().required(),
    delivery_date: Joi.date().required(),
    start_point: Joi.array().items(Joi.number()).length(2).required(),
    end_point: Joi.array().items(Joi.number()).length(2).required(),
  }),
});
